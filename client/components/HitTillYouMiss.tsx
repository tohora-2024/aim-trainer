/* eslint-disable jsx-a11y/click-events-have-key-events */
import { Link } from 'react-router-dom'
import '../styles/index.scss'
import { HitCounter } from './HitCounter'
import { useNavigate } from 'react-router-dom'
import { useState, useRef } from 'react'

interface HitTillYouMissProps {
  selectedGameMode: string
}

function HitTillYouMiss({ selectedGameMode }: HitTillYouMissProps) {
  const numRows = 9
  const numCols = 10
  const [targetCell, setTargetCell] = useState<{ row: number; col: number }>({
    row: 0,
    col: 0,
  })
  const navigate = useNavigate()
  const [hitCount, setHitCount] = useState(0)
  const hitCountRef = useRef(0)
  const [elapsedTime, setElapsedTime] = useState<{
    minutes: number
    seconds: number
  }>({ minutes: 0, seconds: 0 })
  const startTimeRef = useRef<number | null>(null)

  const handleCellClick = (row: number, col: number) => {
    if (!startTimeRef.current) {
      startTimeRef.current = Date.now()
      requestAnimationFrame(updateTimer)
    }
    if (targetCell.row === row && targetCell.col === col) {
      const newTargetCell = getRandomCell()
      setTargetCell(newTargetCell)
      setHitCount(hitCount + 1)
      hitCountRef.current++
    } else {
      navigate(`/add-score/${selectedGameMode}`, {
        state: {
          elapsedTime: elapsedTime,
          hitCount: startTimeRef.current,
          selectedGameMode,
        },
      })
    }
  }

  // setTimeout(function () {
  //   console.log(elapsedTime)
  // }, 5000)

  const handleContainerClick = () => {
    navigate(`/add-score/${selectedGameMode}`, {
      state: {
        elapsedTime: elapsedTime,
        hitCount: hitCountRef.current,
        selectedGameMode,
      },
    })
  }

  const getRandomCell = () => {
    const randomRow = Math.floor(Math.random() * numRows)
    const randomCol = Math.floor(Math.random() * numCols)
    return { row: randomRow, col: randomCol }
  }

  const updateTimer = () => {
    if (startTimeRef.current) {
      const currentTime = Date.now()
      const elapsedTimeInSeconds = Math.floor(
        (currentTime - startTimeRef.current) / 1000,
      )
      const minutes = Math.floor(elapsedTimeInSeconds / 60)
      const seconds = elapsedTimeInSeconds % 60
      setElapsedTime({ minutes, seconds })
      requestAnimationFrame(updateTimer)
    }
  }

  const gridCells = []

  for (let row = 0; row < numRows; row++) {
    for (let col = 0; col < numCols; col++) {
      const isTarget =
        targetCell && targetCell.row === row && targetCell.col === col
      gridCells.push(
        <div
          key={`${row}-${col}`}
          className="grid-cell"
          onClick={() => {
            handleCellClick(row, col)
          }}
          tabIndex={0}
          role="button"
        >
          {isTarget && (
            <img
              className="target-img"
              src="../../images/light.jpeg"
              alt="Target"
            />
          )}
        </div>,
      )
    }
  }

  return (
    <>
      <div className="button-container">
        <p>Click the target to begin</p>
        <Link to={`/leaderboard/${selectedGameMode}`}>
          <button>Leaderboard</button>
        </Link>
        <div className="time-container">
          <strong className="text-grid">Time elapsed: </strong>
          {elapsedTime.minutes} minutes {elapsedTime.seconds} seconds.
        </div>
      </div>
      <div className="hit-count-container">
        <HitCounter hitCount={hitCount} />
      </div>
      <div
        className="grid-container"
        onClick={(event: React.MouseEvent<HTMLDivElement>) => {
          if (!(event.target instanceof HTMLElement)) {
            return
          }
          if (event.target.classList.contains('grid-container')) {
            handleContainerClick()
          }
        }}
        role="button"
        tabIndex={0}
      >
        {gridCells}
      </div>
    </>
  )
}

export default HitTillYouMiss
