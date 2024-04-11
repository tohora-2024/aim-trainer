import request from 'superagent'
import { GameModeAndPlayer } from '../../models/join'

const rootUrl = '/api/v1/join'

export async function getAllGameModesAndAllPlayers(): Promise<
  GameModeAndPlayer[]
> {
  const res = await request.get(rootUrl)
  return res.body
}

export async function getGameModeByPlayerId(
  id: number,
): Promise<GameModeAndPlayer> {
  const res = await request.get(`${rootUrl}/${id}`)
  return res.body
}
