import { Outlet } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { buttonClickAudio } from './PlayAudio'

function App() {
  return (
    <>
      <div className="app">
        <h1 className="app-title">Aim Trainer</h1>
        <Link to="/">
          <button onClick={() => buttonClickAudio()} className="home-button">
            Home
          </button>
        </Link>
      </div>
      <Outlet />
    </>
  )
}

export default App
