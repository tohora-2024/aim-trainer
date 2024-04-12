import request from 'superagent'
import { Player, PlayerData } from '../../models/player'

const rootUrl = '/api/v1/player'

export async function getAllPlayers(): Promise<Player[]> {
  const res = await request.get(rootUrl)
  return res.body
}

export async function getPlayerById(id: number): Promise<Player> {
  const res = await request.get(`${rootUrl}/${id}`)
  return res.body
}

export async function addPlayer(newPlayer: PlayerData) {
  const res = await request.post(rootUrl).send(newPlayer)
  return res
}

export async function deletePlayerById(id: number) {
  const res = await request.delete(`${rootUrl}/${id}`)
  return res.body
}

export async function updatePlayerById(id: number, newPlayer: PlayerData) {
  const res = await request.put(`${rootUrl}/${id}`).send({ newPlayer })
  return res.body
}
