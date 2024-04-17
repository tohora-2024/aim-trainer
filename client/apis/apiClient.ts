import request from 'superagent'
import { PlayerData } from '../../models/player'
import { GameModeAndPlayer } from '../../models/join'

const joinUrl = '/api/v1/join'

const playerUrl = '/api/v1/player'

export async function addPlayer(newPlayer: PlayerData) {
  const res = await request.post(playerUrl).send(newPlayer)
  return res
}

export async function getGameModesAndPlayers(
  gamemodeId: number,
): Promise<GameModeAndPlayer[]> {
  const res = await request.get(joinUrl).query({ gamemodeId })
  return res.body
}
