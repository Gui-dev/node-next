import { getRepository } from 'typeorm'
import { Survey } from '@modules/surveys/infra/typeorm/entities/Survey'

interface ISurveysRepositoryProps {
  title: string
  description: string
}

export class SurveysRepository {
  public async execute ({ title, description }: ISurveysRepositoryProps): Promise<Survey> {
    const surveyRepository = getRepository(Survey)
    const survey = surveyRepository.create({
      title,
      description
    })

    await surveyRepository.save(survey)

    return survey
  }

  public async showSurveys (): Promise<Survey[]> {
    const surveyRepository = getRepository(Survey)
    const surveys = await surveyRepository.find()

    return surveys
  }
}
