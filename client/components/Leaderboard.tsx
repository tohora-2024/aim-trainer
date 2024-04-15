import { useParams } from 'react-router-dom'
import { useGetGameModeAndPlayer } from '../hooks/useJoins'
import { GameModeAndPlayerData } from '../../models/join'

export default function Leaderboard() {
  const { id } = useParams()
  const { data } = useGetGameModeAndPlayer(Number(id))

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
      <div className="leaderboard-container">
        <h1 className="leaderboard-title">LEADERBOARD</h1>
        <div className="leaderboard">
          {arrData?.map((player) => (
            <div key={player?.playerId} className="player-info">
              <div className="player-details">
                <p className="player-name">Player: {player?.playerName}</p>
                <p className="player-score">Score: {player?.playerScore}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}
