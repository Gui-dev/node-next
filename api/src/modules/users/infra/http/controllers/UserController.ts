import { Request, Response } from 'express'

import { UsersRepository } from '@modules/users/infra/typeorm/repositories/UsersRepository'

export class UserController {
  public async create (request: Request, response: Response): Promise<Response> {
    const { name, email } = request.body
    const usersRepository = new UsersRepository()
    const user = await usersRepository.execute({ name, email })

    return response.status(201).json(user)
  }
}
