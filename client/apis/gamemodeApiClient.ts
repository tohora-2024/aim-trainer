import request from 'superagent'
import { GameMode, GameModeData } from '../../models/gamemode'

const rootUrl = '/api/v1/gamemode'

export async function getAllGameModes(): Promise<GameMode[]> {
  const res = await request.get(rootUrl)
  return res.body
}

export async function getGameModeById(id: number): Promise<GameMode> {
  const res = await request.get(`${rootUrl}/${id}`)
  return res.body
}

export async function addGameMode(gamemode: GameModeData) {
  const res = await request.post(rootUrl).send(gamemode)
  return res
}

export async function deleteGameModeById(id: number) {
  const res = await request.delete(`${rootUrl}/${id}`)
  return res.body
}

export async function updateGameModeById(
  id: number,
  newGameMode: GameModeData,
) {
  const res = await request.put(`${rootUrl}/${id}`).send({ newGameMode })
  return res.body
}
