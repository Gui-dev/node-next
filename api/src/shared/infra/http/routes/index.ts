import { Router } from 'express'

import usersRouters from '@modules/users/infra/http/routes/users.routes'
import surveyRouters from '@modules/surveys/infra/http/routes/surveys.routes'

const routes = Router()

routes.use('/users', usersRouters)
routes.use('/surveys', surveyRouters)

export default routes
