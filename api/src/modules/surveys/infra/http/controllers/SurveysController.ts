import { Request, Response } from 'express'

import { SurveysRepository } from '@modules/surveys/repositories/SurveysRepository'

export class SurveysController {
  public async create (request: Request, response: Response): Promise<Response> {
    const { title, description } = request.body
    const surveysRepository = new SurveysRepository()
    const survey = await surveysRepository.execute({
      title,
      description
    })

    return response.status(201).json(survey)
  }

  public async show (request: Request, response: Response): Promise<Response> {
    const surveysRepository = new SurveysRepository()
    const surveys = await surveysRepository.showSurveys()

    return response.status(203).json(surveys)
  }
}
