import { it, expect, describe, vi } from 'vitest'
import request from 'supertest'
import * as db from '../../db/functions/playerFunctions.ts'
import server from '../../server.ts'

vi.mock('../../db/functions/playerFunctions')

const rootUrl = '/api/v1/player'

const dummyDataArr = [
  {
    id: 1,
    name: 'Joel',
    score: 1,
    time: '',
    gamemodeId: 1,
  },
  {
    id: 2,
    name: 'Jess',
    score: 10,
    time: '',
    gamemodeId: 1,
  },
  {
    id: 3,
    name: 'Boston',
    score: 20,
    time: '',
    gamemodeId: 1,
  },
]

const dummyData = {
  id: 1,
  name: 'Joel',
  score: 1,
  time: '',
  gamemodeId: 1,
}

describe('GET /api/v1/player ', () => {
  it('Should send status 200 for getAllPlayers', async () => {
    vi.mocked(db.getAllPlayers).mockResolvedValue(dummyDataArr)

    const res = await request(server).get(`${rootUrl}`)

    expect(res.statusCode).toBe(200)
  })
  it('Should send status 500 getAllPlayers', async () => {
    vi.mocked(db.getAllPlayers).mockRejectedValue(dummyDataArr)

    const res = await request(server).get(`${rootUrl}`)

    expect(res.statusCode).toBe(500)
  })
})

describe('GET /api/v1/player/:id', () => {
  it('Should send status 200 for getPlayerById', async () => {
    vi.mocked(db.getPlayerById).mockResolvedValue(dummyData)

    const res = await request(server).get(`${rootUrl}/1`)

    expect(res.statusCode).toBe(200)
  })
  it('Should send status 500 getPlayerById', async () => {
    vi.mocked(db.getPlayerById).mockRejectedValue(dummyData)

    const res = await request(server).get(`${rootUrl}/1`)

    expect(res.statusCode).toBe(500)
  })
})

describe('POST /api/v1/player', () => {
  it('Should send status 200 for addPlayer', async () => {
    const dummyDataNew = {
      name: 'NEW DATA',
      score: 100,
      time: 'NEW DATA',
      gamemodeId: 1,
    }
    vi.mocked(db.addPlayer).mockResolvedValue(dummyDataNew)

    const res = await request(server).post(`${rootUrl}`).send(dummyDataNew)

    expect(res.statusCode).toBe(200)
  })
  it('Should send status 500 addPlayer', async () => {
    const dummyDataNew = {
      name: 'NEW DATA',
      score: 100,
      time: 'NEW DATA',
      gamemodeId: 1,
    }
    vi.mocked(db.addPlayer).mockRejectedValue(dummyDataNew)

    const res = await request(server).post(`${rootUrl}`).send(dummyDataNew)

    expect(res.statusCode).toBe(500)
  })
})

describe('PATCH /api/v1/player/:id', () => {
  it('Should send status 200 for updatePlayerById', async () => {
    const dummyDataNew = {
      name: 'NEW DATA',
      score: 100,
      time: 'NEW DATA',
      gamemodeId: 1,
    }
    vi.mocked(db.updatePlayerById).mockResolvedValue(dummyDataNew)

    const res = await request(server).patch(`${rootUrl}/1`).send(dummyDataNew)

    expect(res.statusCode).toBe(204)
  })
  it('Should send status 500 updatePlayerById', async () => {
    const dummyDataNew = {
      name: 'NEW DATA',
      score: 100,
      time: 'NEW DATA',
      gamemodeId: 1,
    }
    vi.mocked(db.updatePlayerById).mockRejectedValue(dummyDataNew)

    const res = await request(server).patch(`${rootUrl}/1`).send(dummyDataNew)

    expect(res.statusCode).toBe(500)
  })
})

describe('DELETE /api/v1/player/:id', () => {
  it('Should send status 200 for deletePlayerById', async () => {
    vi.mocked(db.deletePlayerById)

    const res = await request(server).delete(`${rootUrl}/1`)

    expect(res.statusCode).toBe(200)
  })
  it('Should send status 500 deletePlayerById', async () => {
    vi.mocked(db.deletePlayerById).mockRejectedValue('Yes')

    const res = await request(server).delete(`${rootUrl}/1`)

    expect(res.statusCode).toBe(500)
  })
})
