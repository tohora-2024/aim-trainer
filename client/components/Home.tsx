import { useState } from 'react'
import { Link } from 'react-router-dom'

export default function Home() {
  const [selectedGameMode, setSelectedGameMode] = useState('')

  const handleGameModeSelect = (gameMode: string) => {
    setSelectedGameMode(gameMode)
  }
  return (
    <>
      <div className="home-container">
        <h1 className="home-title">Pick a game mode</h1>
        <button onClick={() => handleGameModeSelect('1')}>
          <Link to="1">Classic</Link>
        </button>
        <button onClick={() => handleGameModeSelect('2')}>
          <Link to="2">Classic (2 minutes)</Link>
        </button>
        <button onClick={() => handleGameModeSelect('3')}>
          <Link to="3">Classic (3 minutes)</Link>
        </button>
      </div>
    </>
  )
}
