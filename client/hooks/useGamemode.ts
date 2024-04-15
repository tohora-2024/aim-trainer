import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import * as api from '../apis/gamemodeApiClient'
import { GameModeData } from '../../models/gamemode'

export function useCustomQueryClient() {
  const queryClient = useQueryClient()
  return queryClient
}

export function useGetAllGameModes() {
  return useQuery({
    queryKey: ['gamemode'],
    queryFn: () => api.getAllGameModes(),
  })
}

export function useGetGameModeById(id: number) {
  return useQuery({
    queryKey: ['gamemode', id],
    queryFn: () => api.getGameModeById(id),
  })
}

export function useAddGameMode() {
  const queryClient = useCustomQueryClient()
  const addGameModeMutation = useMutation({
    mutationFn: (newGameMode: GameModeData) => api.addGameMode(newGameMode),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['gamemode'] })
    },
  })
  return addGameModeMutation
}

export function useUpdateGameModeById(id: number) {
  const queryClient = useCustomQueryClient()
  const updateGameModeMutation = useMutation({
    mutationFn: (updatedGameMode: GameModeData) =>
      api.updateGameModeById(id, updatedGameMode),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['gamemode'] })
    },
  })
  return updateGameModeMutation
}

export function useDeleteGameModeById(id: number) {
  const queryClient = useCustomQueryClient()
  const deleteGameModeMutation = useMutation({
    mutationFn: () => api.deleteGameModeById(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['gamemode'] })
    },
  })
  return deleteGameModeMutation
}
