import {
  it,
  expect,
  describe,
  vi,
  beforeAll,
  beforeEach,
  afterAll,
} from 'vitest'
import request from 'supertest'
import * as db from '../../db/functions/playerFunctions.ts'
import server from '../../server.ts'
import connection from '../../db/connection.ts'

const rootUrl = '/api/v1/player'

beforeAll(() => {
  return connection.migrate.latest()
})

beforeEach(async () => {
  await connection.seed.run()
})

const dummyDataArr = [
  {
    id: 1,
    name: 'Joel',
    score: 1,
    time_taken: '',
    gamemode_id: 1,
  },
  {
    id: 2,
    name: 'Jess',
    score: 10,
    time_taken: '',
    gamemode_id: 1,
  },
  {
    id: 3,
    name: 'Boston',
    score: 20,
    time_taken: '',
    gamemode_id: 1,
  },
]

const dummyData = {
  id: 1,
  name: 'Joel',
  score: 1,
  time_taken: '',
  gamemode_id: 1,
}

describe('GET /api/v1/player ', () => {
  it('Should get all players', async () => {
    const res = await request(server).get(`${rootUrl}`)

    expect(res.body).toHaveLength(3)
    expect(res.body).toStrictEqual(dummyDataArr)
    expect(res.body).toMatchInlineSnapshot(`
      [
        {
          "gamemode_id": 1,
          "id": 1,
          "name": "Joel",
          "score": 1,
          "time_taken": "",
        },
        {
          "gamemode_id": 1,
          "id": 2,
          "name": "Jess",
          "score": 10,
          "time_taken": "",
        },
        {
          "gamemode_id": 1,
          "id": 3,
          "name": "Boston",
          "score": 20,
          "time_taken": "",
        },
      ]
    `)
  })
})

describe('GET by ID /api/v1/player/:id', () => {
  it('Should get player based on an ID', async () => {
    const res = await request(server).get(`${rootUrl}/1`)

    expect(res.body).toStrictEqual(dummyData)
    expect(res.body).toMatchInlineSnapshot(`
      {
        "gamemode_id": 1,
        "id": 1,
        "name": "Joel",
        "score": 1,
        "time_taken": "",
      }
    `)
  })
})

describe('POST /api/v1/player', () => {
  it('Should add a player to the database', async () => {
    const addDummyData = {
      name: 'NEW DATA',
      score: 100,
      time_taken: 'NEW DATA',
      gamemode_id: 1,
    }
    await request(server).post('/api/v1/player').send(addDummyData)

    const res = await request(server).get('/api/v1/player')

    expect(res.body).toHaveLength(4)
    expect(res.body).toMatchInlineSnapshot(`
      [
        {
          "gamemode_id": 1,
          "id": 1,
          "name": "Joel",
          "score": 1,
          "time_taken": "",
        },
        {
          "gamemode_id": 1,
          "id": 2,
          "name": "Jess",
          "score": 10,
          "time_taken": "",
        },
        {
          "gamemode_id": 1,
          "id": 3,
          "name": "Boston",
          "score": 20,
          "time_taken": "",
        },
        {
          "gamemode_id": null,
          "id": 4,
          "name": "NEW DATA",
          "score": 100,
          "time_taken": null,
        },
      ]
    `)
  })
})

describe('PATCH /api/v1/player/:id', () => {
  it('Should update a player based on ID', async () => {
    const patchDummyData = {
      name: 'PATCHED DATA',
      score: 100,
      time_taken: 'NEW DATA',
      gamemode_id: 1,
    }
    await request(server).patch('/api/v1/player/2').send(patchDummyData)

    const res = await request(server).get('/api/v1/player')

    // expect(res.body).toHaveLength(3)
    expect(res.body).toMatchInlineSnapshot()
  })
})

describe('DELETE /api/v1/player/:id', () => {
  it('Should delete a game mode based on ID', async () => {
    await request(server).delete('/api/v1/player/2')

    const res = await request(server).get('/api/v1/player')

    expect(res.body).toHaveLength(2)
    expect(res.body).toMatchInlineSnapshot(`
      [
        {
          "gamemode_id": 1,
          "id": 1,
          "name": "Joel",
          "score": 1,
          "time_taken": "",
        },
        {
          "gamemode_id": 1,
          "id": 3,
          "name": "Boston",
          "score": 20,
          "time_taken": "",
        },
      ]
    `)
  })
})

afterAll(() => {
  connection.destroy()
})
