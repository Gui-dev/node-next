import { getRepository } from 'typeorm'

import { SurveyUser } from '@modules/surveysUsers/infra/typeorm/entities/SurveyUser'
import { AppError } from '@shared/error/AppError'

interface IAnswerRepositoryProps {
  value: number
  user: string
}

export class AnswerRepository {
  public async execute ({ value, user }: IAnswerRepositoryProps): Promise<SurveyUser> {
    const surveyUserRepository = getRepository(SurveyUser)
    const surveyUser = await surveyUserRepository.findOne({
      id: String(user)
    })

    if (!surveyUser) {
      throw new AppError('Survey User does not exists!')
    }

    surveyUser.value = Number(value)

    await surveyUserRepository.save(surveyUser)

    return surveyUser
  }
}
