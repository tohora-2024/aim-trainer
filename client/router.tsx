import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from 'react-router-dom'
import App from './components/App'
import Grid from './components/game-grid'
import Home from './components/Home'
import Leaderboard from './components/Leaderboard'
import { useState } from 'react'

const router = createBrowserRouter(
  createRoutesFromElements([
    <Route key="app" path="/" element={<App />}>
      <Route index element={<Home />} />
      <Route
        path="classic"
        element={<Grid onStartGame={() => {}} duration={60000} />}
      />
      <Route
        path="classic2min"
        element={<Grid onStartGame={() => {}} duration={120000} />}
      />
      <Route
        path="classic3min"
        element={<Grid onStartGame={() => {}} duration={180000} />}
      />
      <Route path="leaderboard" element={<Leaderboard />} />
    </Route>,
  ]),
)

export default router
