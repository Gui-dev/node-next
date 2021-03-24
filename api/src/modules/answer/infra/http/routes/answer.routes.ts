import { Router } from 'express'
import { AnswerController } from '../controllers/AnswerController'

const answerRouters = Router()
const answerController = new AnswerController()

answerRouters.get('/:value', answerController.create)

export default answerRouters
