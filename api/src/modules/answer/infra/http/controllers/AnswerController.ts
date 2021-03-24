import { Request, Response } from 'express'
import { AnswerRepository } from '../../typeorm/AnswerRepository'

export class AnswerController {
  public async create (request: Request, response: Response): Promise<Response> {
    const { value } = request.params
    const { user } = request.query

    const valueParse = Number(value)
    const userParse = String(user)

    const answerRepository = new AnswerRepository()
    const answer = await answerRepository.execute({ value: valueParse, user: userParse })

    return response.status(201).json(answer)
  }
}
