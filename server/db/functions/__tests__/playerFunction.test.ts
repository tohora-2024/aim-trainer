import { it, expect, describe, beforeAll, beforeEach, afterAll } from 'vitest'
import * as db from '../../functions/playerFunctions'
import connection from '../../connection'

beforeAll(() => {
  return connection.migrate.latest()
})

beforeEach(async () => {
  await connection.seed.run()
})

describe('getAllPlayers', () => {
  it('Should get all players', async () => {
    const allPlayers = await db.getAllPlayers()

    expect(allPlayers).toHaveLength(6)
    expect(allPlayers[0].id).toBe(1)
  })
})

describe('getPlayerById', () => {
  it('Should get a player by id', async () => {
    const player = await db.getPlayerById(1)

    expect(player.name).toBe('Joel')
  })
})

describe('addplayer', () => {
  it('Should add a singular player', async () => {
    const newPlayer = {
      id: 4,
      name: 'test',
      score: 20,
      time: '',
      gamemodeId: 2,
    }
    await db.addPlayer(newPlayer)

    const allplayers = await db.getAllPlayers()

    expect(allplayers).toHaveLength(7)
    expect(allplayers[3].id).toBe(4)
  })
})

describe('updateplayerById', () => {
  it('Should update a specified entry based on its ID', async () => {
    const allPlayersBefore = await db.getAllPlayers()
    const updatedPlayer = { name: 'test', score: 20, time: '', gamemodeId: 2 }
    await db.updatePlayerById(2, updatedPlayer)

    const allPlayersAfter = await db.getAllPlayers()

    expect(allPlayersBefore[1].name).toBe('Jess')
    expect(allPlayersAfter[1].name).toBe('test')
  })
})

describe('deleteplayerById', () => {
  it('Should delete a player by ID', async () => {
    await db.deletePlayerById(3)

    const allplayers = await db.getAllPlayers()

    expect(allplayers).toHaveLength(5)
    expect(allplayers[5]).toBe(undefined)
  })
})

afterAll(() => {
  connection.destroy()
})
