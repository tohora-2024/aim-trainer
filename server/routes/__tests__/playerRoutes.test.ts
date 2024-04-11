import { it, expect, describe, vi } from 'vitest'
import request from 'supertest'
import * as db from '../../db/functions/playerFunctions.ts'
import server from '../../server.ts'

// describe('GET /api/v1/gamemode ', () => {
//   it.todo('Should get all game mode data', async () => {
//     vi.mocked(db.getAllGameModes).mockResolvedValue(dummyDataArr)

//     const res = await request(server).get(`${rootUrl}`)

//     expect(res.statusCode).toBe(200)
//     expect(res.body).toStrictEqual(dummyDataArr)
//   })
//   it('Should show an error message', async () => {
//     vi.mocked(db.getAllGameModes).mockRejectedValue(dummyDataArr)

//     const res = await request(server).get(`${rootUrl}`)

//     expect(res.statusCode).toBe(500)
//   })
// })
