import connection from '../connection.ts'
import { GameMode } from '../../../models/gamemode.ts'

const db = connection

export async function getAllGameModes(): Promise<GameMode[]> {
  return await db('gamemode').select()
}

export async function getGameModeById(id: number): Promise<GameMode> {
  return await db('gamemode').where('id', id).select().first()
}

export async function addGameMode(newGameMode: GameMode): Promise<GameMode[]> {
  return await db('gamemode').insert(newGameMode)
}

export async function deleteGameMode(id: number): Promise<void> {
  return await db('gamemode').where('id', id).delete()
}

export async function updateGameMode(
  id: number,
  updatedGameMode: Partial<GameMode>,
): Promise<Partial<GameMode>> {
  return db('gamemode').where('id', id).update(updatedGameMode)
}
