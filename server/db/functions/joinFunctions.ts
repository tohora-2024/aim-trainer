import db from '../connection.ts'
import { GameModeAndPlayer } from '../../../models/join.ts'

export async function getGameModesAndPlayers(): Promise<GameModeAndPlayer[]> {
  const data = await db('player')
    .join('gamemode', 'player.gamemode_id', 'gamemode.id')
    .select(
      'player.id as playerId',
      'player.name as playerName',
      'player.score as playerScore',
      'player.time_taken as timeTaken',
      'player.gamemode_id as playerGameModeId',
      'gamemode.id as gameModeId',
      'gamemode.name as gameModeName',
      'gamemode.time_left as gameModeTimeLeft',
    )
  return data
}

export async function getGameModeByPlayerId(
  id: number,
): Promise<GameModeAndPlayer> {
  const data = await db('player')
    .join('gamemode', 'player.gamemode_id', 'gamemode.id')
    .select(
      'player.id as playerId',
      'player.name as playerName',
      'player.score as playerScore',
      'player.time_taken as timeTaken',
      'player.gamemode_id as playerGameModeId',
      'gamemode.id as gameModeId',
      'gamemode.name as gameModeName',
      'gamemode.time_left as gameModeTimeLeft',
    )
    .where('player.id', id)
    .first()
  return data
}

// export async function getAllPlayers(gamemode: string): Promise<Player[]> {
//   return await db('player').select().where('gamemode', gamemode)
// }

export async function getAllGameModesAndAllPlayers(
  gamemode: string,
): Promise<GameModeAndPlayer[]> {
  const data = await db('player')
    .join('gamemode', 'player.gamemode_id', 'gamemode.id')
    .select(
      'player.id as playerId',
      'player.name as playerName',
      'player.score as playerScore',
      'player.time_taken as timeTaken',
      'player.gamemode_id as playerGameModeId',
      'gamemode.id as gameModeId',
      'gamemode.name as gameModeName',
      'gamemode.time_left as gameModeTimeLeft',
    )
    .where('gamemode.name', gamemode)
  return data
}
