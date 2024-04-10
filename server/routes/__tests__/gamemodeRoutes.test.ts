import {
  it,
  expect,
  describe,
  vi,
  beforeAll,
  beforeEach,
  afterAll,
} from 'vitest'
import request from 'supertest'
import * as db from '../../db/functions/gamemodeFunctions.ts'
import server from '../../server.ts'
import connection from '../../db/connection.ts'

vi.mock('../../db/functions/gamemodeFunctions')

const rootUrl = '/api/v1/gamemode'

beforeAll(() => {
  return connection.migrate.latest()
})

beforeEach(async () => {
  await connection.seed.run()
})

const dummyDataArr = [
  { id: 1, name: 'Classic 1 Minute', timeLeft: '1:00' },
  { id: 2, name: 'Classic 2 Minute', timeLeft: '1:00' },
  { id: 3, name: 'Classic 3 Minute', timeLeft: '1:00' },
]

const dummyData = { id: 1, name: 'Classic 1 Minute', timeLeft: '1:00' }

describe('GET /api/v1/gamemode ', () => {
  it('Should get all game mode data', async () => {
    vi.mocked(db.getAllGameModes).mockResolvedValue(dummyDataArr)

    const res = await request(server).get(`${rootUrl}`)

    expect(res.statusCode).toBe(200)
    expect(res.body).toStrictEqual(dummyDataArr)
  })
  it('Should show an error message', async () => {
    vi.mocked(db.getAllGameModes).mockRejectedValue(dummyDataArr)

    const res = await request(server).get(`${rootUrl}`)

    expect(res.statusCode).toBe(500)
  })
})

describe('GET by ID /api/v1/gamemode/:id', () => {
  it('Should get data based on an ID', async () => {
    // Arrange
    vi.mocked(db.getGameModeById).mockResolvedValue(dummyData)

    // Act
    const res = await request(server).get(`${rootUrl}/1`)

    // Assert
    expect(res.statusCode).toBe(200)

    expect(res.body).toStrictEqual(dummyData)
  })
  it('Should show an error message', async () => {
    vi.mocked(db.getGameModeById).mockRejectedValue(dummyData)

    // Act
    const res = await request(server).get('/api/v1/gamemode/1')

    // Assert
    expect(res.statusCode).toBe(500)
  })
})

describe('POST /api/v1/gamemode', () => {
  it.todo('Should add a gamemode to the database', async () => {
    // Arrange
    const dummyDataNew = { name: 'Classic 4 Minute', timeLeft: '2:00' }
    vi.mocked(db.addGameMode).mockResolvedValue(dummyDataNew)
    const res = await request(server).post('/api/v1/gamemode')

    // Act
    vi.mocked(db.getAllGameModes).mockResolvedValue(dummyDataArr)
    const res2 = await request(server).get('/api/v1/gamemode')

    // Assert
    console.log(res2.body, '😒🤣🤣😂❤')
    expect(res.statusCode).toBe(200)
    expect(res2.body).toHaveLength(4)
  })
  it.todo('Should show an error message', async () => {
    const dummyDataNew = { name: 'Classic 4 Minute', timeLeft: '2:00' }
    vi.mocked(db.addGameMode).mockRejectedValue(dummyDataNew)

    // Act
    const res = await request(server).get('/api/v1/gamemode')

    // Assert
    expect(res.statusCode).toBe(500)
  })
})
// describe('/secrets', () => {
//   it('should send mystical secrets when query is mystical', async () => {
//     //Act
//     const res = await request(server).get('/secrets?type=mystical')

//     //Assert
//     expect(res.statusCode).toBe(200)
//     expect(res.body).toStrictEqual(['so mystical'])
//   })
// })

describe('PATCH /api/v1/gamemode/:id', () => {
  it.todo('Should update a game mode based on ID', async () => {
    // Arrange
    // Act
    // Assert
  })
})

describe('DELETE /api/v1/gamemode/:id', () => {
  it.todo('Should delete a game mode based on ID', async () => {
    // Arrange
    // Act
    // Assert
  })
})

afterAll(() => {
  connection.destroy()
})
