import { getRepository, Not, IsNull } from 'typeorm'

import { SurveyUser } from '@modules/surveysUsers/infra/typeorm/entities/SurveyUser'

interface INpsRepositoryProps {
  survey_id: string
}

interface IPromiseResponse {
  detractor: number
  promoters: number
  passive: number
  totalAnswer: number
  calculateNps: number
}

export class NpsRepository {
  public async execute ({ survey_id }: INpsRepositoryProps): Promise<IPromiseResponse> {
    const surveysUsersRepository = getRepository(SurveyUser)
    const surveysUsers = await surveysUsersRepository.find({
      survey_id,
      value: Not(IsNull())
    })

    const detractor = surveysUsers.filter(survey => (survey.value >= 0 && survey.value <= 6)).length
    const promoters = surveysUsers.filter(survey => survey.value > 8).length
    const passive = surveysUsers.filter(survey => survey.value > 6 && survey.value <= 8).length
    const totalAnswer = surveysUsers.length

    const calculateNps = Number(
      (((promoters - detractor) / totalAnswer) * 100).toFixed(2)
    )

    return {
      detractor,
      promoters,
      passive,
      totalAnswer,
      calculateNps
    }
  }
}
