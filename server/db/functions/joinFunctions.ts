import db from '../connection.ts'

export async function getGameModeByPlayerId(id: number) {
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
  return data
}

export async function getAllGameModesAndAllPlayers() {
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
