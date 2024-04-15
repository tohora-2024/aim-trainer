interface PlayerInfoProps {
  score: number
  gamemode: string
}

export const PlayerInfo: React.FC<PlayerInfoProps> = ({ score, gamemode }) => {
  return (
    <div>
      <p>{score}</p>
      <p>{gamemode}</p>{' '}
    </div>
  )
}
