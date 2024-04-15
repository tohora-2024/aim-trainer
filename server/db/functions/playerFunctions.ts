import connection from '../connection.ts'
import { Player, PlayerData } from '../../../models/player.ts'

const db = connection

export async function getAllPlayers(): Promise<Player[]> {
  return await db('player').select()
}

export async function getAllPlayersByGameMode(
  gamemode: string,
): Promise<Player[]> {
  return await db('player').select().where('gamemode', gamemode)
}

export async function getPlayerById(id: number): Promise<Player> {
  return await db('player').where('id', id).select().first()
}

export async function addPlayer(newPlayer: PlayerData): Promise<PlayerData> {
  return await db('player').insert({
    name: newPlayer.name,
    score: newPlayer.score,
    time_taken: newPlayer.time,
    gamemode_id: newPlayer.gamemodeId,
  })
}

export async function deletePlayerById(id: number): Promise<void> {
  return await db('player').where('id', id).delete()
}

export async function updatePlayerById(
  id: number,
  updatedPlayer: PlayerData,
): Promise<PlayerData> {
  return db('player').where('id', id).update({
    name: updatedPlayer.name,
    score: updatedPlayer.score,
    time_taken: updatedPlayer.time,
    gamemode_id: updatedPlayer.gamemodeId,
  })
}
