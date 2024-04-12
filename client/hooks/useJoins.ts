import { useQuery } from '@tanstack/react-query'
import * as api from '../apis/joinApiClient.ts'

export function useGetAllGameModesAndAllPlayers() {
  return useQuery({
    queryKey: ['gamemode-player'],
    queryFn: () => api.getAllGameModesAndAllPlayers(),
  })
}

export function useGetGameModeByPlayerId(playerId: number) {
  return useQuery({
    queryKey: ['gamemode-player', playerId],
    queryFn: () => api.getGameModeByPlayerId(playerId),
  })
}

export function useGetGameModeAndPlayer(gamemode: string) {
  return useQuery({
    queryKey: ['gamemode', gamemode],
    queryFn: () => api.getGameModesAndPlayers(gamemode),
  })
}
