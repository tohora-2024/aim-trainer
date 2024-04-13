import { useParams } from 'react-router-dom'
import { useGetGameModeAndPlayer } from '../hooks/useJoins'
import AddNameForm from './AddNameForm'
import HitCounter from './hit-counter'

export default function Leaderboard() {
  const { gamemode } = useParams()
  const { data } = useGetGameModeAndPlayer(gamemode || '')

  console.log('data', data)

  return (
    <>
      <h1>LEADERBOARD</h1>
      {/* <AddNameForm score={hitCount} /> */}
      <div>
        {data?.map((player) => (
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
