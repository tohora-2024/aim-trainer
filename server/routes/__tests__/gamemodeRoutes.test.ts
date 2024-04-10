import { it, expect, describe, vi } from 'vitest'
import request from 'supertest'
import * as db from '../../db/functions/gamemodeFunctions.ts'
import server from '../../server.ts'

vi.mock('../../db/functions/gamemodeFunctions')

const dummyData = [
  { id: 1, name: 'Classic 1 Minute', timeLeft: '1:00' },
  { id: 2, name: 'Classic 2 Minute', timeLeft: '1:00' },
  { id: 3, name: 'Classic 3 Minute', timeLeft: '1:00' },
]

describe('GET /api/v1/gamemode ', () => {
  it('Should get all game mode data', async () => {
    // Arrange
    vi.mocked(db.getAllGameModes).mockResolvedValue(dummyData)

    // Act
    const res = await request(server).get('/api/v1/gamemode')

    // Assert
    expect(res.statusCode).toBe(200)
    expect(res.body).toStrictEqual(dummyData)
  })
})

describe(' GET by ID /api/v1/gamemode/:id', () => {
  it('Should do', async () => {
    // Arrange
    vi.mocked(db.getAllGameModes).mockResolvedValue(dummyData)

    // Act
    const res = await request(server).get('/api/v1/gamemode/1')

    // Assert
    expect(res.statusCode).toBe(200)
    expect(res.body).toBe(dummyData[0].name)
  })
})

describe('POST /api/v1/gamemode', () => {
  it.todo('Should do', async () => {
    // Arrange
    // Act
    // Assert
  })
})

describe('PATCH /api/v1/gamemode/:id', () => {
  it.todo('Should do', async () => {
    // Arrange
    // Act
    // Assert
  })
})

describe('DELETE /api/v1/gamemode/:id', () => {
  it.todo('Should do', async () => {
    // Arrange
    // Act
    // Assert
  })
})
