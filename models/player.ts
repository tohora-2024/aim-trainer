export interface Player {
  id: number
  name: string
  score: number
  time: string
  gamemodeId: number
}

export interface PlayerData {
  name: string
  score: number
  time?: { time: string }
  gamemodeId: number
}
