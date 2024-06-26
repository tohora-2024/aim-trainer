import { it, expect, describe, beforeAll, beforeEach, afterAll } from 'vitest'
import request from 'supertest'
import server from '../../server.ts'
import connection from '../../db/connection.ts'

const rootUrl = '/api/v1/join'

beforeAll(() => {
  return connection.migrate.latest()
})

beforeEach(async () => {
  await connection.seed.run()
})

const dummyData = {
  playerId: 1,
  playerName: 'Joel',
  playerScore: 1,
  timeTaken: '',
  playerGameModeId: 1,
  gameModeId: 1,
  gameModeName: 'Classic 1 Minute',
  gameModeTimeLeft: '1:00',
}

describe('GET by ID /api/v1/join/:id', () => {
  it('Should get a game mode based on player id', async () => {
    const res = await request(server).get(`${rootUrl}/1`)

    expect(res.body).toStrictEqual(dummyData)
    expect(res.body).toMatchInlineSnapshot(`
      {
        "gameModeId": 1,
        "gameModeName": "Classic 1 Minute",
        "gameModeTimeLeft": "1:00",
        "playerGameModeId": 1,
        "playerId": 1,
        "playerName": "Joel",
        "playerScore": 1,
        "timeTaken": "",
      }
    `)
  })
})
afterAll(() => {
  connection.destroy()
})
