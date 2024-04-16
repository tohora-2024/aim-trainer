import { Outlet } from 'react-router-dom'
import { Link } from 'react-router-dom'
import buttonClick from '../../public/audio/button-click.mp3'

function App() {
  addEventListener('click', playAudio)

  function playAudio() {
    new Audio(buttonClick).play()
  }

  return (
    <>
      <div className="app">
        <h1 className="app-title">Aim Trainer</h1>
        <Link to="/">
          <button className="home-button">Home</button>
        </Link>
      </div>

      <Outlet />
    </>
  )
}

export default App
