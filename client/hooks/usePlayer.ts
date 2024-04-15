import { useQuery, useQueryClient, useMutation } from '@tanstack/react-query'
import * as api from '../apis/playerApiClient'
import { PlayerData } from '../../models/player'

export function useCustomQueryClient() {
  const queryClient = useQueryClient()
  return queryClient
}

export function useGetAllPlayers() {
  return useQuery({
    queryKey: ['gamemode'],
    queryFn: () => api.getAllPlayers(),
  })
}

export function useGetPlayerById(id: number) {
  return useQuery({
    queryKey: ['gamemode', id],
    queryFn: () => api.getPlayerById(id),
  })
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

export function useUpdatePlayerById(id: number) {
  const queryClient = useCustomQueryClient()
  const updatePlayerMutation = useMutation({
    mutationFn: (updatedPlayer: PlayerData) =>
      api.updatePlayerById(id, updatedPlayer),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['player'] })
    },
  })
  return updatePlayerMutation
}

export function useDeletePlayerById(id: number) {
  const queryClient = useCustomQueryClient()
  const deletePlayerMutation = useMutation({
    mutationFn: () => api.deletePlayerById(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['player'] })
    },
  })
  return deletePlayerMutation
}
