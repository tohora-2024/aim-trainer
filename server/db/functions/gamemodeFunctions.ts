import connection from '../connection.ts'
import { GameMode, GameModeData } from '../../../models/gamemode.ts'

const db = connection

export async function getAllGameModes(): Promise<GameMode[]> {
  return await db('gamemode').select()
}

export async function getGameModeById(id: number): Promise<GameMode> {
  return await db('gamemode').where('id', id).select().first()
}

export async function addGameMode(
  newGameMode: GameModeData,
): Promise<GameModeData> {
  return await db('gamemode').insert({
    name: newGameMode.name,
    time_left: newGameMode.timeLeft,
  })
}

export async function deleteGameModeById(id: number): Promise<void> {
  return await db('gamemode').where('id', id).delete()
}

export async function updateGameModeById(
  id: number,
  updatedGameMode: GameModeData,
): Promise<GameModeData> {
  return db('gamemode').where('id', id).update({
    name: updatedGameMode.name,
    time_left: updatedGameMode.timeLeft,
  })
}
