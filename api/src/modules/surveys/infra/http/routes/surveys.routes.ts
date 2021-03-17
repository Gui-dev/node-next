import { Router } from 'express'

import { SurveysController } from '@modules/surveys/infra/http/controllers/SurveysController'

const surveyRouters = Router()
const surveysController = new SurveysController()

surveyRouters.post('/', surveysController.create)
surveyRouters.get('/', surveysController.show)

export default surveyRouters
