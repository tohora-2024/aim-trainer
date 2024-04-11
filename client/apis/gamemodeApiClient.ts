import request from 'superagent'
import { GameMode, GameModeData } from '../../models/gamemode'

const rootUrl = '/api/v1/gamemode'

export async function getAllGameModes() {
  const res = await request.get(rootUrl)
  return res.body
}

export async function getGameModeById(id: number) {
  const res = await request.get(`${rootUrl}/${id}`)
  return res.body
}
