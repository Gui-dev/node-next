import { Router } from 'express'

import usersRouters from '@modules/users/infra/http/routes/users.routes'

const routes = Router()

routes.use('/users', usersRouters)

export default routes
