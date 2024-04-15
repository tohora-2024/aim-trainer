import { it, expect, describe, vi } from 'vitest'
import request from 'supertest'
import * as db from '../../db/functions/joinFunctions.ts'
import server from '../../server.ts'

vi.mock('../../db/functions/joinFunctions')

const rootUrl = '/api/v1/join'

const dummyDataArr = [
  {
    playerId: 1,
    playerName: 'Joel',
    playerScore: 1,
    timeTaken: '',
    playerGameModeId: 1,
    gameModeId: 1,
    gameModeName: 'Classic 1 Minute',
    gameModeTimeLeft: '',
  },
  {
    playerId: 2,
    playerName: 'Jess',
    playerScore: 10,
    timeTaken: '',
    playerGameModeId: 1,
    gameModeId: 1,
    gameModeName: 'Classic 2 Minute',
    gameModeTimeLeft: '',
  },
  {
    playerId: 3,
    playerName: 'Boston',
    playerScore: 20,
    timeTaken: '',
    playerGameModeId: 1,
    gameModeId: 1,
    gameModeName: 'Classic 2 Minute',
    gameModeTimeLeft: '',
  },
  {
    playerId: 4,
    playerName: 'Berhane',
    playerScore: 10,
    timeTaken: '',
    playerGameModeId: 2,
    gameModeId: 2,
    gameModeName: 'Classic 2 Minute',
    gameModeTimeLeft: '1:00',
  },
  {
    playerId: 5,
    playerName: 'Gerard',
    playerScore: 100,
    timeTaken: '',
    playerGameModeId: 2,
    gameModeId: 2,
    gameModeName: 'Classic 2 Minute',
    gameModeTimeLeft: '1:00',
  },
  {
    playerId: 6,
    playerName: 'Robert',
    playerScore: 20,
    timeTaken: '',
    playerGameModeId: 3,
    gameModeId: 3,
    gameModeName: 'Classic 3 Minute',
    gameModeTimeLeft: '1:00',
  },
]

const dummyData = {
  playerId: 1,
  playerName: 'Joel',
  playerScore: 1,
  timeTaken: '',
  playerGameModeId: 1,
  gameModeId: 1,
  gameModeName: 'Classic 1 Minute',
  gameModeTimeLeft: '',
}

describe('GET /api/v1/player ', () => {
  it('Should send status 200 for getGameModesAndPlayers', async () => {
    vi.mocked(db.getGameModesAndPlayers).mockResolvedValue(dummyDataArr)

    const res = await request(server).get(`${rootUrl}`)

    expect(res.statusCode).toBe(200)
  })
  it('Should send status 500 getGameModesAndPlayers', async () => {
    vi.mocked(db.getGameModesAndPlayers).mockRejectedValue(dummyDataArr)

    const res = await request(server).get(`${rootUrl}`)

    expect(res.statusCode).toBe(500)
  })
})

describe('GET /api/v1/player/:id', () => {
  it('Should send status 200 for getGameModeByPlayerId', async () => {
    vi.mocked(db.getGameModeByPlayerId).mockResolvedValue(dummyData)

    const res = await request(server).get(`${rootUrl}/1`)

    expect(res.statusCode).toBe(200)
  })
  it('Should send status 500 getGameModeByPlayerId', async () => {
    vi.mocked(db.getGameModeByPlayerId).mockRejectedValue(dummyData)

    const res = await request(server).get(`${rootUrl}/1`)

    expect(res.statusCode).toBe(500)
  })
})
