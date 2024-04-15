import { useParams } from 'react-router-dom'
import { useGetGameModeAndPlayer } from '../hooks/useJoins'
import AddNameForm from './AddNameForm'
import { GameModeAndPlayerData } from '../../models/join'

export default function Leaderboard() {
  const { id } = useParams()

  console.log(id, '😂👌😒🤣')

  const { data } = useGetGameModeAndPlayer(Number(id))

  console.log(data, '😂👌😒🤣')

  const arrData = data?.sort(function (
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
      <AddNameForm />
      <div>
        {arrData?.map((player) => (
          <div key={player?.playerId}>
            <p>Player: {player?.playerName}</p>
            <p>Score: {player?.playerScore}</p>
          </div>
        ))}
      </div>
    </>
  )
}
