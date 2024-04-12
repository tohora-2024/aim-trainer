import { GameModeAndPlayer } from '../../models/join'
import { Player } from '../../models/player'
import { useGetAllGameModes } from '../hooks/useGamemode'
import {
  useGetAllGameModesAndAllPlayers,
  useGetGameModeByPlayerId,
} from '../hooks/useJoins'
import { useGetAllPlayers } from '../hooks/usePlayer'

interface Props {
  id: number
}
export default function Leaderboard({ id }: Props) {
  const { data } = useGetAllPlayers()
  const gamemodeQuery = useGetGameModeByPlayerId(id)

  const gameModeData = gamemodeQuery.data
  console.log(gameModeData)
  return (
    <>
      <h1>LEADERBOARD</h1>
      <div>
        {data?.map((player: Player) => (
          <div key={player.id}>
            <p>Player: {player.name}</p>
            <p>Score: {player.score}</p>
          </div>
        ))}
        <p>Mode: {gameModeData?.gameModeName}</p>
        {/* {gameModeData?.map((gamemode: GameModeAndPlayer) => (
          <div key={gamemode.gameModeId}>
            <p>Mode: {gamemode.gameModeName}</p>
          </div>
        ))} */}
      </div>
    </>
  )
}
