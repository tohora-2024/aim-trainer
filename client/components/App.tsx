import { Outlet } from 'react-router-dom'
import Grid from '../components/game-grid.tsx'
import Home from './Home.tsx'

function App() {
  return (
    <>
      <div className="app">
        <h1>Aim Trainer</h1>
      </div>
      <div className="grid-container">
        <Outlet />
      </div>
    </>
  )
}

export default App
