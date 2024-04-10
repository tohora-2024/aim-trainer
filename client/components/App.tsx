import { Outlet } from 'react-router-dom'

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
