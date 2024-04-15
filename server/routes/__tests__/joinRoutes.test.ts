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

// player.id as playerId',
//       'player.name as playerName',
//       'player.score as playerScore',
//       'player.time_taken as timeTaken',
//       'player.gamemode_id as playerGameModeId',
//       'gamemode.id as gameModeId',
//       'gamemode.name as gameModeName',
//       'gamemode.time_left as gameModeTimeLeft',
const dummyDataArr = [
  {
    playerId: 1,
    playerName: 'Joel',
    playerScore: 1,
    timeTaken: '',
    playerGameModeId: 1,
    gameModeId: 1,
    gameModeName: 'Classic 1 Minute',
    gameModeTimeLeft: '1:00',
  },
  {
    playerId: 2,
    playerName: 'Jess',
    playerScore: 10,
    timeTaken: '',
    playerGameModeId: 1,
    gameModeId: 1,
    gameModeName: 'Classic 1 Minute',
    gameModeTimeLeft: '1:00',
  },
  {
    playerId: 3,
    playerName: 'Boston',
    playerScore: 20,
    timeTaken: '',
    playerGameModeId: 1,
    gameModeId: 1,
    gameModeName: 'Classic 1 Minute',
    gameModeTimeLeft: '1:00',
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
  gameModeTimeLeft: '1:00',
}

describe('GET /api/v1/join ', () => {
  it('Should get all players and all game modes', async () => {
    const res = await request(server).get(`${rootUrl}`)

    expect(res.body).toHaveLength(6)
    expect(res.body).toStrictEqual(dummyDataArr)
    expect(res.body).toMatchInlineSnapshot(`
      [
        {
          "gameModeId": 1,
          "gameModeName": "Classic 1 Minute",
          "gameModeTimeLeft": "1:00",
          "playerGameModeId": 1,
          "playerId": 1,
          "playerName": "Joel",
          "playerScore": 1,
          "timeTaken": "",
        },
        {
          "gameModeId": 1,
          "gameModeName": "Classic 1 Minute",
          "gameModeTimeLeft": "1:00",
          "playerGameModeId": 1,
          "playerId": 2,
          "playerName": "Jess",
          "playerScore": 10,
          "timeTaken": "",
        },
        {
          "gameModeId": 1,
          "gameModeName": "Classic 1 Minute",
          "gameModeTimeLeft": "1:00",
          "playerGameModeId": 1,
          "playerId": 3,
          "playerName": "Boston",
          "playerScore": 20,
          "timeTaken": "",
        },
        {
          "gameModeId": 2,
          "gameModeName": "Classic 2 Minute",
          "gameModeTimeLeft": "1:00",
          "playerGameModeId": 2,
          "playerId": 4,
          "playerName": "Berhane",
          "playerScore": 10,
          "timeTaken": "",
        },
        {
          "gameModeId": 2,
          "gameModeName": "Classic 2 Minute",
          "gameModeTimeLeft": "1:00",
          "playerGameModeId": 2,
          "playerId": 5,
          "playerName": "Gerard",
          "playerScore": 100,
          "timeTaken": "",
        },
        {
          "gameModeId": 3,
          "gameModeName": "Classic 3 Minute",
          "gameModeTimeLeft": "1:00",
          "playerGameModeId": 3,
          "playerId": 6,
          "playerName": "Robert",
          "playerScore": 20,
          "timeTaken": "",
        },
      ]
    `)
  })
})

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
