import { it, expect, describe, beforeAll, beforeEach, afterAll } from 'vitest'
import * as db from '../../functions/gamemodeFunctions'
import connection from '../../connection'
import { GameMode } from '../../../../models/gamemode'

beforeAll(() => {
  return connection.migrate.latest()
})

beforeEach(async () => {
  await connection.seed.run()
})

describe('getAllGameModes', () => {
  it('Should get all gamemodes', async () => {
    // Arrange / Act
    const allGamemodes = await db.getAllGameModes()

    // Assert
    expect(allGamemodes).toHaveLength(3)
    expect(allGamemodes[0].id).toBe(1)
  })
})

describe('getGameModeById', () => {
  it('Should get a gamemode by id', async () => {
    // Arrange / Act
    const gamemode = await db.getGameModeById(1)

    // Assert
    expect(gamemode.name).toBe('Classic 1 Minute')
  })
})

describe('addGameMode', () => {
  it('Should add a singular gamemode', async () => {
    // Arrange
    const newGamemode = { id: 4, name: 'test', timeLeft: '1:25' }
    await db.addGameMode(newGamemode)

    // Act
    const allGamemodes = await db.getAllGameModes()

    // Assert
    expect(allGamemodes).toHaveLength(4)
    expect(allGamemodes[3].id).toBe(4)
  })
})

describe('updateGameModeById', () => {
  it('Should do', async () => {
    // Arrange
    const updatedGamemode = { name: 'test', time_left: '1:25' }
    await db.updateGameModeById(2)
    // Act
    // Assert
  })
})

afterAll(() => {
  connection.destroy()
})
