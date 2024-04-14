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
        <button onClick={() => handleGameModeSelect('Classic 1 Minute')}>
          <Link to="Classic 1 Minute">Classic</Link>
        </button>
        <button onClick={() => handleGameModeSelect('Classic 2 Minute')}>
          <Link to="Classic 2 Minute">Classic (2 minutes)</Link>
        </button>
        <button onClick={() => handleGameModeSelect('Classic 3 Minute')}>
          <Link to="Classic 3 Minute">Classic (3 minutes)</Link>
        </button>
      </div>
    </>
  )
}
