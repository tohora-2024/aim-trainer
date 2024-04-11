import { Player } from '../../models/player'
import { useGetAllGameModes } from '../hooks/useGamemode'
import { useGetAllPlayers } from '../hooks/usePlayer'

export default function Leaderboard() {
  const { data } = useGetAllPlayers()
  const { gamemode } = useGetAllGameModes()
  return (
    <>
      <h1>LEADERBOARD</h1>
      <div>
        {data?.map((player: Player) => (
          <div key={player.id}>
            <p>Player: {player.name}</p>
            <p>Score: {player.score}</p>
            <p>Game Mode: {player.gamemodeId}</p>
          </div>
        ))}
      </div>
    </>
  )
}
