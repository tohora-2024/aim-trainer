import connection from '../connection.ts'
import { Player } from '../../../models/player.ts'

const db = connection

export async function getAllPlayers(): Promise<Player[]> {
  return await db('player').select()
}

export async function getPlayerById(id: number): Promise<Player> {
  return await db('player').where('id', id).select().first()
}

export async function addPlayer(newPlayer: Player): Promise<Player> {
  return await db('player').insert(newPlayer)
}

export async function deletePlayer(id: number): Promise<void> {
  return await db('player').where('id', id).delete()
}

export async function updatePlayer(
  id: number,
  updatedPlayer: Partial<Player>,
): Promise<Partial<Player>> {
  return db('player').where('id', id).update(updatedPlayer)
}
