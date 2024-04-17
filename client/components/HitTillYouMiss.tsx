import { Link } from 'react-router-dom'
import '../styles/index.scss'
import { HitCounter } from './HitCounter'
import { useNavigate } from 'react-router-dom'
import { useState, useRef } from 'react'

interface HitTillYouMissProps {
  onStartGame: () => void
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

  const handleCellClick = (row: number, col: number) => {
    if (targetCell.row === row && targetCell.col === col) {
      const newTargetCell = getRandomCell()
      setTargetCell(newTargetCell)
      setHitCount(hitCount + 1)
      hitCountRef.current++
    } else {
      navigate(`/add-score/${selectedGameMode}`, {
        state: { hitCount: hitCountRef.current, selectedGameMode },
      })
    }
  }

  const handleContainerClick = () => {
    navigate(`/add-score/${selectedGameMode}`, {
      state: { hitCount: hitCountRef.current, selectedGameMode },
    })
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
      gridCells.push(
        // eslint-disable-next-line jsx-a11y/click-events-have-key-events
        <div
          key={`${row}-${col}`}
          className="grid-cell"
          onClick={(event) => {
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
            console.log(event.target)
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
