import { Router } from 'express'
import * as db from '../db/functions/joinFunctions.ts'

const router = Router()

router.get('/', async (req, res) => {
  try {
    const everything = await db.getAllGameModesAndAllPlayers()
    res.json(everything)
  } catch (error) {
    console.error('Error on get all game modes and players:', error)
    res.sendStatus(500)
  }
})

router.get('/:id', async (req, res) => {
  try {
    const playerId = Number(req.params.id)
    const gamemode = await db.getGameModeByPlayerId(playerId)
    res.json(gamemode)
  } catch (error) {
    console.error('Error on get all game modes by player id:', error)
    res.sendStatus(500)
  }
})

export default router
