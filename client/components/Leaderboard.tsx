import { GameModeAndPlayer } from '../../models/join'
import { Player } from '../../models/player'
import { useGetAllGameModes, useGetGameModeById } from '../hooks/useGamemode'
import {
  useGetAllGameModesAndAllPlayers,
  useGetGameModeByPlayerId,
  useGetGameModeAndPlayer,
} from '../hooks/useJoins'
import { useGetAllPlayers } from '../hooks/usePlayer'

interface Props {
  gamemode: string
}
export default function Leaderboard({ gamemode }: Props) {
  const { data } = useGetGameModeAndPlayer(gamemode)
  const dataArr = Array(data)

  console.log('data', dataArr)

  return (
    <>
      <h1>LEADERBOARD</h1>
      <div>
        {dataArr
          ?.filter(
            (player) =>
              Number(player?.playerGameModeId) === Number(player?.gameModeId),
          )
          .map((player) => (
            <div key={player?.playerId}>
              <p>Player: {player?.playerName}</p>
              <p>Score: {player?.playerScore}</p>
            </div>
          ))}
      </div>
    </>
  )
}
