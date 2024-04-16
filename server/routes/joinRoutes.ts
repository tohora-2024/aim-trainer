import { Router } from 'express'
import * as db from '../db/functions/joinFunctions.ts'

const router = Router()

// GET /api/v1/join
router.get('/', async (req, res) => {
  try {
    const gamemode = Number(req.query.gamemodeId)
    const player = await db.getAllGameModesAndAllPlayers(gamemode)
    res.json(player)
  } catch (error) {
    console.error('Error on get all player:', error)
    res.sendStatus(500)
  }
})

// GET /api/v1/join/:id
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
