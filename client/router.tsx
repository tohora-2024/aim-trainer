import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from 'react-router-dom'
import App from './components/App'
import Grid from './components/Grid'
import Home from './components/Home'
import Leaderboard from './components/Leaderboard'
import AddNameForm from './components/AddNameForm'
import HitTillYouMiss from './components/HitTillYouMiss'

const router = createBrowserRouter(
  createRoutesFromElements([
    <Route key="app" path="/" element={<App />}>
      <Route index element={<Home />} />
      <Route
        path="1"
        element={
          <Grid onStartGame={() => {}} duration={60000} selectedGameMode="1" />
        }
      />
      <Route
        path="2"
        element={
          <Grid onStartGame={() => {}} duration={120000} selectedGameMode="2" />
        }
      />
      <Route
        path="3"
        element={
          <Grid onStartGame={() => {}} duration={180000} selectedGameMode="3" />
        }
      />
      <Route
        path="4"
        element={<HitTillYouMiss onStartGame={() => {}} selectedGameMode="4" />}
      />
      <Route path="leaderboard/:id" element={<Leaderboard />} />
      <Route path="add-score/:id" element={<AddNameForm />} />
    </Route>,
  ]),
)

export default router
