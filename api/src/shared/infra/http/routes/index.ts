import { Router } from 'express'

import usersRouters from '@modules/users/infra/http/routes/users.routes'
import surveyRouters from '@modules/surveys/infra/http/routes/surveys.routes'
import surveysUsersRouters from '@modules/surveysUsers/infra/http/routes/surveysUsers.routes'

const routes = Router()

routes.use('/users', usersRouters)
routes.use('/surveys', surveyRouters)
routes.use('/surveys-users', surveysUsersRouters)

export default routes
