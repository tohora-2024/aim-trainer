import { Link } from 'react-router-dom'
import '../styles/index.scss'
import { HitCounter } from './HitCounter'
import { useNavigate } from 'react-router-dom'
import { useState, useEffect, useRef } from 'react'

interface GridProps {
  onStartGame: () => void
  duration: number
  selectedGameMode: string
}

function Grid({ onStartGame, duration, selectedGameMode }: GridProps) {
  const numRows = 9
  const numCols = 10
  const [targetCell, setTargetCell] = useState<{ row: number; col: number }>({
    row: 0,
    col: 0,
  })
  const [timerStarted, setTimerStarted] = useState(false)
  const [timeLeft, setTimeLeft] = useState<number>(duration)
  const navigate = useNavigate()
  const [hitCount, setHitCount] = useState(0)
  const hitCountRef = useRef(0)

  useEffect(() => {
    let interval: NodeJS.Timeout | null = null

    if (timerStarted) {
      interval = setInterval(() => {
        setTimeLeft((prevTimeLeft) => {
          if (prevTimeLeft <= 0) {
            clearInterval(interval as NodeJS.Timeout)
            navigate(`/add-score/${selectedGameMode}`, {
              state: { hitCount: hitCountRef.current, selectedGameMode },
            })
            return 0
          }
          return prevTimeLeft - 1000
        })
      }, 1000)
    }

    return () => {
      if (interval) clearInterval(interval)
    }
  }, [timerStarted, navigate, selectedGameMode, duration, hitCountRef])

  const handleStartButtonClick = () => {
    if (!timerStarted) {
      setTimerStarted(true)
    }
  }

  const handleCellClick = (row: number, col: number) => {
    if (!timerStarted) {
      return
    }
    if (targetCell.row === row && targetCell.col === col) {
      const newTargetCell = getRandomCell()
      setTargetCell(newTargetCell)
      setHitCount(hitCount + 1)
      hitCountRef.current++
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
      const cellColor = isTarget ? '#fff' : '#800000'
      gridCells.push(
        // eslint-disable-next-line jsx-a11y/click-events-have-key-events
        <div
          key={`${row}-${col}`}
          className="grid-cell"
          style={{ backgroundColor: cellColor }}
          onClick={timerStarted ? () => handleCellClick(row, col) : undefined}
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
        <p>Click the button below to begin</p>
        <button onClick={handleStartButtonClick} disabled={timerStarted}>
          Start Timer
        </button>
        <Link to={`/leaderboard/${selectedGameMode}`}>
          <button>Leaderboard</button>
        </Link>
      </div>
      <div className="time-container">
        <strong className="text-grid">Time left: </strong>
        {formatTime(timeLeft)}
      </div>
      <div className="hit-count-container">
        <HitCounter hitCount={hitCount} />
      </div>
      <div className="grid-container">{gridCells}</div>
    </>
  )
}

export default Grid
