export interface Player {
  playerGameModeId: number
  id: number
  name: string
  score: number
  time: string
  gamemodeId: number
}

export interface PlayerData {
  name: string
  score: number
  time?: string
  gamemodeId: number
}
