import { useState } from 'react'
import { Link } from 'react-router-dom'

export default function Home() {
  const [selectedGameMode, setSelectedGameMode] = useState('')

  const handleGameModeSelect = (gameMode: string) => {
    setSelectedGameMode(gameMode)
  }
  return (
    <>
      <h1>Pick a game mode</h1>
      <div className="button-container">
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
