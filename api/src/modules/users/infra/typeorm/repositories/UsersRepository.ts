import { getRepository } from 'typeorm'

import { AppError } from '@shared/error/AppError'
import { User } from '@modules/users/infra/typeorm/entities/User'

interface IUsersRepository {
  name: string
  email: string
}

export class UsersRepository {
  public async execute ({ name, email }: IUsersRepository): Promise<User> {
    const userRepository = getRepository(User)

    const userAlreadyExists = await userRepository.findOne({ email })

    if (userAlreadyExists) {
      throw new AppError('Email address already used')
    }

    const user = userRepository.create({
      name,
      email
    })

    await userRepository.save(user)

    return user
  }
}
