import { useParams } from 'react-router-dom'
import { useGetGameModeAndPlayer } from '../hooks/useJoins'
import AddNameForm from './AddNameForm'
import { GameModeAndPlayerData } from '../../models/join'

export default function Leaderboard() {
  const { gamemode } = useParams()
  const { data } = useGetGameModeAndPlayer(gamemode || '')

  console.log('data', data)

  const data2 = data?.sort(function (
    a: GameModeAndPlayerData,
    b: GameModeAndPlayerData,
  ) {
    if (a.playerScore > b.playerScore) return -1
    if (a.playerScore < b.playerScore) return 1
    return 0
  })

  return (
    <>
      <h1>LEADERBOARD</h1>
      {/* <AddNameForm score={hitCount} /> */}
      <div>
        {data2?.map((player) => (
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
