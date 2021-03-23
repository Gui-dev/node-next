import { getRepository } from 'typeorm'

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

    const userAlreadyExists = await user.findOne({ email })

    if (!userAlreadyExists) {
      throw new AppError('User does not exists!')
    }

    const surveyAlreadyExists = await survey.findOne({ id: survey_id })

    if (!surveyAlreadyExists) {
      throw new AppError('Survey does not exists!')
    }

    const surveysUsers = surveyUser.create({
      user_id: userAlreadyExists.id,
      survey_id
    })

    await surveyUser.save(surveysUsers)

    await sendMailService.execute({
      to: email,
      subject: surveyAlreadyExists.title,
      body: `<h1>${surveyAlreadyExists.title}</h1><p>${surveyAlreadyExists.description}</p>`
    })

    return surveysUsers
  }
}
