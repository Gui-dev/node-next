import { Request, Response } from 'express'

import { SurveysUsersRepository } from '@modules/surveysUsers/infra/typeorm/repositories/SurveysUsersRepository'

export class SurveysUsersController {
  public async create (request: Request, response: Response): Promise<Response> {
    const { email, survey_id } = request.body
    const surveysUsersRepository = new SurveysUsersRepository()
    const surveysUsers = await surveysUsersRepository.execute({ email, survey_id })

    return response.status(201).json(surveysUsers)
  }
}
