import { getRepository } from 'typeorm'

import { AppError } from '@shared/error/AppError'
import { User } from '@modules/users/infra/typeorm/entities/User'
import { userValidation } from '../../http/validation/userValidation'

interface IUsersRepository {
  name: string
  email: string
}

export class UsersRepository {
  public async execute ({ name, email }: IUsersRepository): Promise<User> {
    const userRepository = getRepository(User)

    try {
      await userValidation.validate({ name, email })

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
    } catch (error) {
      throw new AppError(error)
    }
  }
}
