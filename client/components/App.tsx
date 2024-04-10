import React, { useState } from 'react'
import Grid from '../components/game-grid'
import CountdownTimer from '../components/Countdown'

function App() {
  const gameDuration = 60000
  const [gameStarted, setGameStarted] = useState(false)

  const startGame = () => {
    setGameStarted(true)
  }

  return (
    <>
      <div className="app">
        <h1>Aim Trainer</h1>
        {gameStarted && <CountdownTimer duration={gameDuration} />}
      </div>
      <div className="grid-container">
        <Grid onStartGame={startGame} />
      </div>
    </>
  )
}

export default App
