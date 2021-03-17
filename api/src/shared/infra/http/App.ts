import 'reflect-metadata'
import express, { Request, Response, NextFunction } from 'express'
import cors from 'cors'
import 'express-async-errors'
import { AppError } from '@shared/error/AppError'

import '@shared/infra/typeorm'

import routes from './routes'

export class App {
  public server: express.Application

  constructor () {
    this.server = express()

    this.middlewares()
    this.routes()
    this.exceptionHandler()
  }

  public middlewares () {
    this.server.use(express.json())
    this.server.use(cors())
  }

  public routes () {
    this.server.use(routes)
  }

  public exceptionHandler () {
    this.server.use((err: Error, request: Request, response: Response, _: NextFunction) => {
      if (err instanceof AppError) {
        console.log(err)
        return response.status(err.statusCode).json({
          error: 'error',
          message: err.message
        })
      }

      console.log('FORA:', err)

      return response.status(500).json({
        error: 'error',
        message: 'Internal server error'
      })
    })
  }
}
