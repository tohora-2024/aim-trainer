import { it, expect, describe, beforeAll, beforeEach, afterAll } from 'vitest'
import request from 'supertest'
import server from '../../server.ts'
import connection from '../../db/connection.ts'

const rootUrl = '/api/v1/gamemode'

beforeAll(() => {
  return connection.migrate.latest()
})

beforeEach(async () => {
  await connection.seed.run()
})

const dummyDataArr = [
  { id: 1, name: 'Classic 1 Minute', time_left: '1:00' },
  { id: 2, name: 'Classic 2 Minute', time_left: '1:00' },
  { id: 3, name: 'Classic 3 Minute', time_left: '1:00' },
]

const dummyData = { id: 1, name: 'Classic 1 Minute', time_left: '1:00' }

describe('GET /api/v1/gamemode ', () => {
  it('Should get all game mode data', async () => {
    const res = await request(server).get(`${rootUrl}`)

    expect(res.body).toHaveLength(3)
    expect(res.body).toStrictEqual(dummyDataArr)
    expect(res.body).toMatchInlineSnapshot(`
      [
        {
          "id": 1,
          "name": "Classic 1 Minute",
          "time_left": "1:00",
        },
        {
          "id": 2,
          "name": "Classic 2 Minute",
          "time_left": "1:00",
        },
        {
          "id": 3,
          "name": "Classic 3 Minute",
          "time_left": "1:00",
        },
      ]
    `)
  })
})

describe('GET by ID /api/v1/gamemode/:id', () => {
  it('Should get data based on an ID', async () => {
    const res = await request(server).get(`${rootUrl}/1`)

    expect(res.body).toStrictEqual(dummyData)
    expect(res.body).toMatchInlineSnapshot(`
      {
        "id": 1,
        "name": "Classic 1 Minute",
        "time_left": "1:00",
      }
    `)
  })
})

describe('POST /api/v1/gamemode', () => {
  it('Should add a gamemode to the database', async () => {
    const addDummyData = { name: 'NEW DATA', timeLeft: 'NEW DATA' }
    await request(server).post('/api/v1/gamemode').send(addDummyData)

    const res = await request(server).get('/api/v1/gamemode')

    expect(res.body).toHaveLength(4)
    expect(res.body).toMatchInlineSnapshot(`
      [
        {
          "id": 1,
          "name": "Classic 1 Minute",
          "time_left": "1:00",
        },
        {
          "id": 2,
          "name": "Classic 2 Minute",
          "time_left": "1:00",
        },
        {
          "id": 3,
          "name": "Classic 3 Minute",
          "time_left": "1:00",
        },
        {
          "id": 4,
          "name": "NEW DATA",
          "time_left": "NEW DATA",
        },
      ]
    `)
  })
})

describe('PATCH /api/v1/gamemode/:id', () => {
  it('Should update a game mode based on ID', async () => {
    const patchDummyData = { name: 'PATCHED DATA', timeLeft: 'PATCHED DATA' }
    await request(server).patch('/api/v1/gamemode/2').send(patchDummyData)

    const res = await request(server).get('/api/v1/gamemode')

    expect(res.body).toHaveLength(3)
    expect(res.body).toMatchInlineSnapshot(`
      [
        {
          "id": 1,
          "name": "Classic 1 Minute",
          "time_left": "1:00",
        },
        {
          "id": 2,
          "name": "PATCHED DATA",
          "time_left": "PATCHED DATA",
        },
        {
          "id": 3,
          "name": "Classic 3 Minute",
          "time_left": "1:00",
        },
      ]
    `)
  })
})

describe('DELETE /api/v1/gamemode/:id', () => {
  it('Should delete a game mode based on ID', async () => {
    await request(server).delete('/api/v1/gamemode/2')

    const res = await request(server).get('/api/v1/gamemode')

    expect(res.body).toHaveLength(2)
    expect(res.body).toMatchInlineSnapshot(`
      [
        {
          "id": 1,
          "name": "Classic 1 Minute",
          "time_left": "1:00",
        },
        {
          "id": 3,
          "name": "Classic 3 Minute",
          "time_left": "1:00",
        },
      ]
    `)
  })
})

afterAll(() => {
  connection.destroy()
})
