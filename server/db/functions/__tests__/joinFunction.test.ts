import { it, expect, describe, beforeAll, beforeEach, afterAll } from 'vitest'
import * as db from '../../functions/joinFunctions'
import connection from '../../connection'

beforeAll(() => {
  return connection.migrate.latest()
})

beforeEach(async () => {
  await connection.seed.run()
})

describe('getAllGameModesAndAllPlayers', () => {
  it('Should get all gamemodes and players', async () => {
    // Arrange / Act
    const allGameModesAndAllPlayers =
      await db.getAllGameModesAndAllPlayers('Classic 1 Minute')

    // Assert
    expect(allGameModesAndAllPlayers).toHaveLength(3)
    expect(allGameModesAndAllPlayers[0].playerId).toBe(1)
    expect(allGameModesAndAllPlayers[2].gameModeId).toBe(1)
  })
})

describe('getGameModeByPlayerId', () => {
  it('Should get a game mode based on player id', async () => {
    // Arrange / Act
    const player = await db.getGameModeByPlayerId(1)
    // Assert
    expect(player.playerName).toBe('Joel')
    expect(player.gameModeName).toBe('Classic 1 Minute')
  })
})

afterAll(() => {
  connection.destroy()
})
