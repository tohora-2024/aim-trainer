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

  console.log('data', data)

  return (
    <>
      <h1>LEADERBOARD</h1>
      <div>
        {/* {data?.map((player) => (
          <div key={player.playerId}>
            <p>Name: {player.playerName}</p>
            <p>Score: {player.playerScore}</p>
          </div>
        ))} */}
        {data
          ?.filter(
            (gamemode) =>
              Number(gamemode?.playerGameModeId) === Number(gamemode),
          )
          .map((player) => (
            <div key={player?.playerId}>
              <p>Player: {player?.playerName}</p>
              <p>Score: {player?.playerScore}</p>
              <p>Gamemode: {player?.gameModeName}</p>
            </div>
          ))}
      </div>
    </>
  )
}
