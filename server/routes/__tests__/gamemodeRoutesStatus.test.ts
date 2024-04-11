import { it, expect, describe, vi } from 'vitest'
import request from 'supertest'
import * as db from '../../db/functions/gamemodeFunctions.ts'
import server from '../../server.ts'

vi.mock('../../db/functions/gamemodeFunctions')

const rootUrl = '/api/v1/gamemode'

const dummyData = { id: 1, name: 'Classic 1 Minute', timeLeft: '1:00' }

const dummyDataArr = [
  { id: 1, name: 'Classic 1 Minute', timeLeft: '1:00' },
  { id: 2, name: 'Classic 2 Minute', timeLeft: '1:00' },
  { id: 3, name: 'Classic 3 Minute', timeLeft: '1:00' },
]

describe('GET /api/v1/gamemode ', () => {
  it('Should send status 200 for getAllGameModes', async () => {
    vi.mocked(db.getAllGameModes).mockResolvedValue(dummyDataArr)

    const res = await request(server).get(`${rootUrl}`)

    expect(res.statusCode).toBe(200)
  })
  it('Should send status 500 getAllGameModes', async () => {
    vi.mocked(db.getAllGameModes).mockRejectedValue(dummyDataArr)

    const res = await request(server).get(`${rootUrl}`)

    expect(res.statusCode).toBe(500)
  })
})

describe('GET /api/v1/gamemode/:id', () => {
  it('Should send status 200 for getGameModeById', async () => {
    vi.mocked(db.getGameModeById).mockResolvedValue(dummyData)

    const res = await request(server).get(`${rootUrl}/1`)

    expect(res.statusCode).toBe(200)
  })
  it('Should send status 500 getGameModeById', async () => {
    vi.mocked(db.getGameModeById).mockRejectedValue(dummyData)

    const res = await request(server).get(`${rootUrl}/1`)

    expect(res.statusCode).toBe(500)
  })
})

describe('POST /api/v1/gamemode', () => {
  it('Should send status 200 for addGameMode', async () => {
    const dummyDataNew = { name: 'Classic 4 Minute', timeLeft: '2:00' }
    vi.mocked(db.addGameMode).mockResolvedValue(dummyDataNew)

    const res = await request(server).post(`${rootUrl}`).send(dummyDataNew)

    expect(res.statusCode).toBe(200)
  })
  it('Should send status 500 addGameMode', async () => {
    const dummyDataNew = { name: 'Classic 4 Minute', timeLeft: '2:00' }
    vi.mocked(db.addGameMode).mockRejectedValue(dummyDataNew)

    const res = await request(server).post(`${rootUrl}`).send(dummyDataNew)

    expect(res.statusCode).toBe(500)
  })
})

describe('PATCH /api/v1/gamemode/:id', () => {
  it('Should send status 200 for updateGameModeById', async () => {
    const dummyDataNew = { name: 'Classic 4 Minute', timeLeft: '2:00' }
    vi.mocked(db.updateGameModeById).mockResolvedValue(dummyDataNew)

    const res = await request(server).patch(`${rootUrl}/1`).send(dummyDataNew)

    expect(res.statusCode).toBe(204)
  })
  it('Should send status 500 updateGameModeById', async () => {
    const dummyDataNew = { name: 'Classic 4 Minute', timeLeft: '2:00' }
    vi.mocked(db.updateGameModeById).mockRejectedValue(dummyDataNew)

    const res = await request(server).patch(`${rootUrl}/1`).send(dummyDataNew)

    expect(res.statusCode).toBe(500)
  })
})

describe('DELETE /api/v1/gamemode/:id', () => {
  it('Should send status 200 for deleteGameModeById', async () => {
    vi.mocked(db.deleteGameModeById)

    const res = await request(server).delete(`${rootUrl}/1`)

    expect(res.statusCode).toBe(200)
  })
  it('Should send status 500 deleteGameModeById', async () => {
    vi.mocked(db.deleteGameModeById).mockRejectedValue('Yes')

    const res = await request(server).delete(`${rootUrl}/1`)

    expect(res.statusCode).toBe(500)
  })
})
