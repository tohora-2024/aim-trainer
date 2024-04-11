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
    // Arrange / Act
    const allPlayers = await db.getAllPlayers()

    // Assert
    expect(allPlayers).toHaveLength(3)
    expect(allPlayers[0].id).toBe(1)
  })
})

describe('getPlayerById', () => {
  it('Should get a player by id', async () => {
    // Arrange / Act
    const player = await db.getPlayerById(1)

    // Assert
    expect(player.name).toBe('Joel')
  })
})

describe('addplayer', () => {
  it('Should add a singular player', async () => {
    // Arrange
    const newPlayer = {
      id: 4,
      name: 'test',
      score: 20,
      time: '',
      gamemodeId: 2,
    }
    await db.addPlayer(newPlayer)

    // Act
    const allplayers = await db.getAllPlayers()

    // Assert
    expect(allplayers).toHaveLength(4)
    expect(allplayers[3].id).toBe(4)
  })
})

describe('updateplayerById', () => {
  it('Should update a specified entry based on its ID', async () => {
    // Arrange
    const allPlayersBefore = await db.getAllPlayers()
    const updatedPlayer = { name: 'test', score: 20, time: '', gamemodeId: 2 }
    await db.updatePlayerById(2, updatedPlayer)

    // Act
    const allPlayersAfter = await db.getAllPlayers()

    // Assert
    expect(allPlayersBefore[1].name).toBe('Jess')
    expect(allPlayersAfter[1].name).toBe('test')
  })
})

describe('deleteplayerById', () => {
  it('Should delete a player by ID', async () => {
    // Arrange
    await db.deletePlayerById(3)

    // Act
    const allplayers = await db.getAllPlayers()

    // Assert
    expect(allplayers).toHaveLength(2)
    expect(allplayers[2]).toBe(undefined)
  })
})

afterAll(() => {
  connection.destroy()
})
