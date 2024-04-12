import { GameModeAndPlayer } from '../../models/join'
import { Player } from '../../models/player'
import { useGetAllGameModes, useGetGameModeById } from '../hooks/useGamemode'
import {
  useGetAllGameModesAndAllPlayers,
  useGetGameModeByPlayerId,
} from '../hooks/useJoins'
import { useGetAllPlayers } from '../hooks/usePlayer'

interface Props {
  id: number
}
export default function Leaderboard({ id }: Props) {
  const { data: playersData } = useGetAllPlayers(gamemode)
  const { data: gameModeData } = useGetGameModeByPlayerId(id)

  return (
    <>
      <h1>LEADERBOARD</h1>
      <div>
        {playersData?.map((player: Player) => (
          <div key={player.id}>
            <p>Player: {player.name}</p>
            <p>Score: {player.score}</p>
          </div>
        ))}
        {/* {gameModeData && <p>Mode: {gameModeData.gameModeName}</p>} */}
        {gameModeData?.map((gamemode: GameModeAndPlayer) => (
          <div key={gamemode.gameModeId}>
            <p>Gamemode: {gamemode.gameModeName}</p>
          </div>
        ))}
      </div>
    </>
  )
}
