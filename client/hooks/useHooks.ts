import { useQuery, useQueryClient, useMutation } from '@tanstack/react-query'
import * as api from '../apis/apiClient'
import { PlayerData } from '../../models/player'

export function useCustomQueryClient() {
  const queryClient = useQueryClient()
  return queryClient
}

export function useAddPlayer() {
  const queryClient = useCustomQueryClient()
  const addPlayerMutation = useMutation({
    mutationFn: (newPlayer: PlayerData) => api.addPlayer(newPlayer),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['player'] })
    },
  })
  return addPlayerMutation
}

export function useGetGameModeAndPlayer(gamemodeId: number) {
  return useQuery({
    queryKey: ['gamemodeId', gamemodeId],
    queryFn: () => api.getGameModesAndPlayers(gamemodeId),
  })
}
