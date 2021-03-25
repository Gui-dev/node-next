import { Request, Response } from 'express'
import { NpsRepository } from '../../typeorm/NpsRepository'

export class NpsController {
  public async create (request: Request, response: Response): Promise<Response> {
    const { survey_id } = request.params
    const npsRepository = new NpsRepository()
    const nps = await npsRepository.execute({ survey_id })

    return response.status(201).json(nps)
  }
}
