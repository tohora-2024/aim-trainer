import { Link } from 'react-router-dom'
import '../styles/index.scss'
import HitCounter from './hit-counter'
import { useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'

interface GridProps {
  onStartGame: () => void
}

function Grid({ onStartGame }: GridProps) {
  const numRows = 9
  const numCols = 10
  const [targetCell, setTargetCell] = useState<{ row: number; col: number }>({
    row: 0,
    col: 0,
  })
  const [timerStarted, setTimerStarted] = useState(false)
  const [timeLeft, setTimeLeft] = useState<number>(60000)
  const navigate = useNavigate()
  const [hitCount, setHitCount] = useState(0)

  useEffect(() => {
    let interval: NodeJS.Timeout | null = null

    if (timerStarted) {
      interval = setInterval(() => {
        setTimeLeft((prevTimeLeft) => {
          if (prevTimeLeft <= 0) {
            clearInterval(interval as NodeJS.Timeout)
            navigate('/leaderboard')
            return 0
          }
          return prevTimeLeft - 1000
        })
      }, 1000)
    }

    return () => {
      if (interval) clearInterval(interval)
    }
  }, [timerStarted, navigate])

  const handleCellClick = (row: number, col: number) => {
    if (!timerStarted) {
      setTimerStarted(true)
    }
    if (targetCell.row === row && targetCell.col === col) {
      const newTargetCell = getRandomCell()
      setTargetCell(newTargetCell)
      setHitCount(hitCount + 1)
      onStartGame()
    }
  }

  const getRandomCell = () => {
    const randomRow = Math.floor(Math.random() * numRows)
    const randomCol = Math.floor(Math.random() * numCols)
    return { row: randomRow, col: randomCol }
  }

  const gridCells = []

  for (let row = 0; row < numRows; row++) {
    for (let col = 0; col < numCols; col++) {
      const isTarget =
        targetCell && targetCell.row === row && targetCell.col === col
      const cellColor = isTarget ? '#000' : '#fff'
      gridCells.push(
        // eslint-disable-next-line jsx-a11y/click-events-have-key-events
        <div
          key={`${row}-${col}`}
          className="grid-cell"
          style={{ backgroundColor: cellColor }}
          onClick={() => handleCellClick(row, col)}
          tabIndex={0}
          role="button"
        ></div>,
      )
    }
  }

  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60000)
    const seconds = Math.floor((time % 60000) / 1000)
    return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`
  }

  return (
    <>
      <div className="button-container">
        <p>Click the target to begin</p>
        <button>
          <Link to="/">Home</Link>
        </button>
      </div>
      <div className="time-container">
        <strong>Time left: </strong>
        {formatTime(timeLeft)}
      </div>
      <div className="grid-container">
        <HitCounter hitCount={hitCount} />
        {gridCells}
      </div>
    </>
  )
}

export default Grid
