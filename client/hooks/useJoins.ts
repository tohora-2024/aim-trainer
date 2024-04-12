import { useQuery } from '@tanstack/react-query'
import * as api from '../apis/joinApiClient.ts'
import { GameModeAndPlayer } from '../../models/join'

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
