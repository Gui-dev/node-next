import request from 'supertest'

import { App } from '@shared/infra/http/App'
import createConnection from '@shared/infra/typeorm'

const app = new App().server

describe('Users', () => {
  beforeAll(async () => {
    const connection = await createConnection()
    await connection.runMigrations()
  })

  it('should be able to create a new user', async () => {
    const response = await request(app)
      .post('/users')
      .send({
        email: 'user@example.com',
        name: 'User Example'
      })

    expect(response.status).toBe(201)
  })
})
