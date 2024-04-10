import { useState } from 'react'

const gameGrid = () => {
  const [grid, setGrid] = useState([])

  const rows = 25
  const columns = 25

  const initialGrid = []
  for (let i = 0; i < rows; i++)
    for (let u = 0; u < columns; u++) {
      initialGrid.push({ row: i, columns: u, isTarget: false })
    }
}
