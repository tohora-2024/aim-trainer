import { Link } from 'react-router-dom'
import { useState } from 'react'
import '../styles/index.scss'
import HitCounter from './hit-counter'

function Grid() {
  const numRows = 9
  const numCols = 10
  const [targetCell, setTargetCell] = useState<{ row: number; col: number }>({
    row: 0,
    col: 0,
  })
  const [hitCount, setHitCount] = useState(0)

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

  const getRandomCell = () => {
    const randomRow = Math.floor(Math.random() * numRows)
    const randomCol = Math.floor(Math.random() * numCols)
    return { row: randomRow, col: randomCol }
  }

  const handleCellClick = (row: number, col: number) => {
    if (targetCell.row === row && targetCell.col === col) {
      const newTargetCell = getRandomCell()
      setTargetCell(newTargetCell)
      setHitCount(hitCount + 1)
    }
  }

  return (
    <>
      <div className="button-container">
        <button>
          <Link to="/">Home</Link>
        </button>
      </div>
      <div className="grid-container">
        <HitCounter hitCount={hitCount} />
        {gridCells}
      </div>
    </>
  )
}

export default Grid
