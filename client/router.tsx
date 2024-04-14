import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from 'react-router-dom'
import App from './components/App'
import Grid from './components/game-grid'
import Home from './components/Home'
import Leaderboard from './components/Leaderboard'

const router = createBrowserRouter(
  createRoutesFromElements([
    <Route key="app" path="/" element={<App />}>
      <Route index element={<Home />} />
      <Route
        path="Classic 1 Minute"
        element={
          <Grid
            onStartGame={() => {}}
            //Changed game time for testing purposes please change the 6000 below back to 180000
            duration={6000}
            selectedGameMode="Classic 1 Minute"
          />
        }
      />
      <Route
        path="Classic 2 Minute"
        element={
          <Grid
            onStartGame={() => {}}
            duration={120000}
            selectedGameMode="Classic 2 Minute"
          />
        }
      />
      <Route
        path="Classic 3 Minute"
        //Changed game time for testing purposes please change the 6000 below back to 180000
        element={
          <Grid
            onStartGame={() => {}}
            duration={6000}
            selectedGameMode="Classic 3 Minute"
          />
        }
      />
      <Route path="leaderboard/:gamemode" element={<Leaderboard />} />
    </Route>,
  ]),
)

export default router
