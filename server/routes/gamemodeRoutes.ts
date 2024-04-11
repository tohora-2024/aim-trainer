import { Router } from 'express'
import * as db from '../db/functions/gamemodeFunctions.ts'

const router = Router()

// GET /api/v1/gamemode
router.get('/', async (req, res) => {
  try {
    const gamemode = await db.getAllGameModes()
    res.json(gamemode)
  } catch (error) {
    console.error('Error on get all gamemode:', error)
    res.sendStatus(500)
  }
})

// GET by ID /api/v1/gamemode/:id
router.get('/:id', async (req, res) => {
  try {
    const id = Number(req.params.id)
    const gamemodeId = await db.getGameModeById(id)
    res.json(gamemodeId)
  } catch (error) {
    console.error('Error on get gamemode by id:', error)
    res.sendStatus(500)
  }
})

// POST /api/v1/gamemode
router.post('/', async (req, res) => {
  try {
    const newGameMode = req.body
    await db.addGameMode(newGameMode)
    res.sendStatus(200)
  } catch (error) {
    console.error('Error on post game mode', error)
    res.sendStatus(500)
  }
})

// PATCH /api/v1/gamemode/:id
router.patch('/:id', async (req, res) => {
  try {
    const id = Number(req.params.id)
    const { name, timeLeft } = req.body
    const updatedGameMode = { name, timeLeft }
    await db.updateGameModeById(id, updatedGameMode)
    res.sendStatus(204)
  } catch (error) {
    console.error('Error on get update game mode', error)
    res.sendStatus(500)
  }
})

// DELETE /api/v1/gamemode/:id
router.delete('/:id', async (req, res) => {
  try {
    const id = Number(req.params.id)
    await db.deleteGameModeById(id)
    res.sendStatus(200)
  } catch (error) {
    console.error('Error on delete game mode:', error)
    res.sendStatus(500)
  }
})

export default router
