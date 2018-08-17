const request = require('supertest')
const app = require('../app')

describe('Bank account API', () => {

  it('GET / returns a 200', () => {
    return request(app).get('/')
      .expect(200)
  })

  it('POST /create-account returns a 200', () => {
    return request(app).post('/create-account')
      .send({
        owner: 'John Doe'
      })
      .set('Accept', 'application/json')
      .expect(200)
  })

})
