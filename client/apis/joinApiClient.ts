import request from 'superagent'
// import { Player, PlayerData } from '../../models/player'

const rootUrl = '/api/v1/player'

export async function getAllPlayers() {
  const res = await request.get(rootUrl)
  return res.body
}

export async function getPlayerById(id: number) {
  const res = await request.get(`${rootUrl}/${id}`)
  return res.body
}
