import { useState } from 'react'
import { Link } from 'react-router-dom'

export default function Home() {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [selectedGameMode, setSelectedGameMode] = useState('')

  const handleGameModeSelect = (gameMode: string) => {
    setSelectedGameMode(gameMode)
  }
  return (
    <>
      <div className="home-container">
        <h1 className="home-title">Pick a game mode</h1>
        <Link to="1">
          <button onClick={() => handleGameModeSelect('1')}>Classic</button>
        </Link>
        <Link to="2">
          <button onClick={() => handleGameModeSelect('2')}>
            Classic (2 minutes)
          </button>
        </Link>
        <Link to="3">
          <button onClick={() => handleGameModeSelect('3')}>
            Classic (3 minutes)
          </button>
        </Link>
        <Link to="4">
          <button onClick={() => handleGameModeSelect('4')}>
            Hit Till You Miss
          </button>
        </Link>
      </div>
    </>
  )
}
