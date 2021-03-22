import { Router } from 'express'

import { SurveysUsersController } from '@modules/surveysUsers/infra/http/controllers/SurveysUsersController'

const surveysUsersRouters = Router()
const surveysUsersController = new SurveysUsersController()

surveysUsersRouters.post('/send-email', surveysUsersController.create)

export default surveysUsersRouters
