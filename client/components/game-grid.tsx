import { Link } from 'react-router-dom'
import '../styles/index.scss'

function Grid() {
  const numRows = 9
  const numCols = 10

  const gridCells = []

  for (let row = 0; row < numRows; row++) {
    for (let col = 0; col < numCols; col++) {
      gridCells.push(<div key={`${row}-${col}`} className="grid-cell"></div>)
    }
  }

  return (
    <>
      <div className="button-container">
        <button>
          <Link to="/">Home</Link>
        </button>
      </div>
      <div className="grid-container">{gridCells}</div>
    </>
  )
}

export default Grid
