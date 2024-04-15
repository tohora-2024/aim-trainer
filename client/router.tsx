import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from 'react-router-dom'
import App from './components/App'
import Grid from './components/Grid'
import Home from './components/Home'
import Leaderboard from './components/Leaderboard'

const router = createBrowserRouter(
  createRoutesFromElements([
    <Route key="app" path="/" element={<App />}>
      <Route index element={<Home />} />
      <Route
        path="1"
        element={
          <Grid
            onStartGame={() => {}}
            //Changed game time for testing purposes please change the 6000 below back to 60000
            duration={6000}
            selectedGameMode="1"
          />
        }
      />
      <Route
        path="2"
        element={
          <Grid
            onStartGame={() => {}}
            //Changed game time for testing purposes please change the 6000 below back to 120000
            duration={6000}
            selectedGameMode="2"
          />
        }
      />
      <Route
        path="3"
        //Changed game time for testing purposes please change the 6000 below back to 180000
        element={
          <Grid onStartGame={() => {}} duration={6000} selectedGameMode="3" />
        }
      />
      <Route path="leaderboard/:id" element={<Leaderboard />} />
    </Route>,
  ]),
)

export default router
