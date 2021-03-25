import { Router } from 'express'
import { AnswerController } from '../controllers/AnswerController'
import { NpsController } from '../controllers/NpsController'

const answerRouters = Router()
const answerController = new AnswerController()
const npsController = new NpsController()

answerRouters.get('/:value', answerController.create)
answerRouters.get('/nps/:survey_id', npsController.create)

export default answerRouters
