import { getRepository } from 'typeorm'
import { resolve } from 'path'

import { User } from '@modules/users/infra/typeorm/entities/User'
import { Survey } from '@modules/surveys/infra/typeorm/entities/Survey'
import { SurveyUser } from '@modules/surveysUsers/infra/typeorm/entities/SurveyUser'
import sendMailService from '@shared/infra/services/SendMailService'
import { AppError } from '@shared/error/AppError'

interface ISurveysUsersRepositoryProps {
  email: string
  survey_id: string
}

export class SurveysUsersRepository {
  public async execute ({ email, survey_id }: ISurveysUsersRepositoryProps): Promise<SurveyUser> {
    const user = getRepository(User)
    const survey = getRepository(Survey)
    const surveyUser = getRepository(SurveyUser)

    const templateMailPath = resolve(__dirname, '..', '..', '..', '..', '..', 'shared', 'infra', 'views', 'emails', 'npsMail.hbs')

    const userAlreadyExists = await user.findOne({ email })

    if (!userAlreadyExists) {
      throw new AppError('User does not exists!')
    }

    const surveyAlreadyExists = await survey.findOne({ id: survey_id })

    if (!surveyAlreadyExists) {
      throw new AppError('Survey does not exists!')
    }

    const surveyUserAlreadyExists = await surveyUser.findOne({
      where: { user_id: userAlreadyExists.id, value: null },
      relations: ['user', 'survey']
    })

    const variables = {
      survey_user_id: '',
      user_id: userAlreadyExists.id,
      name: userAlreadyExists.name,
      title: surveyAlreadyExists.title,
      description: surveyAlreadyExists.description,
      link: `${process.env.APP_URL}/answers`
    }

    if (surveyUserAlreadyExists) {
      variables.survey_user_id = surveyUserAlreadyExists.id

      await sendMailService.execute({
        to: email,
        subject: surveyAlreadyExists.title,
        variables,
        path: templateMailPath
      })

      return surveyUserAlreadyExists
    }

    const surveysUsers = surveyUser.create({
      user_id: userAlreadyExists.id,
      survey_id
    })

    await surveyUser.save(surveysUsers)

    variables.survey_user_id = surveysUsers.id

    await sendMailService.execute({
      to: email,
      subject: surveyAlreadyExists.title,
      variables,
      path: templateMailPath
    })

    return surveysUsers
  }
}
