import { Router } from 'express'
import * as db from '../db/functions/playerFunctions.ts'

const router = Router()

// GET /api/v1/player
router.get('/', async (req, res) => {
  try {
    const player = await db.getAllPlayers()
    res.json(player)
  } catch (error) {
    console.error('Error on get all player:', error)
    res.sendStatus(500).send('Something went wrong')
  }
})

// GET by ID /api/v1/player/:id
router.get('/:id', async (req, res) => {
  try {
    const id = Number(req.params.id)
    const playerId = await db.getPlayerById(id)
    res.json(playerId)
  } catch (error) {
    console.error('Error on get player by id:', error)
    res.sendStatus(500).send('Something went wrong')
  }
})

// POST /api/v1/player
router.post('/', async (req, res) => {
  try {
    const newPlayer = req.body
    await db.addPlayer(newPlayer)
    res.sendStatus(200)
  } catch (error) {
    console.error('Error on post game mode', error)
    res.sendStatus(500).send('Something went wrong')
  }
})

// PATCH /api/v1/player/:id
router.patch('/:id', async (req, res) => {
  try {
    const id = Number(req.params.id)
    const { name, timeLeft } = req.body
    const updatedPlayer = { name, timeLeft }
    await db.updatePlayer(id, updatedPlayer)
  } catch (error) {
    console.error('Error on get update game mode', error)
    res.sendStatus(500).send('Something went wrong')
  }
})

// DELETE /api/v1/player/:id
router.delete('/:id', async (req, res) => {
  try {
    const id = Number(req.params.id)
    await db.deletePlayer(id)
    res.sendStatus(200)
  } catch (error) {
    console.error('Error on delete game mode:', error)
    res.sendStatus(500).send('Something went wrong')
  }
})

export default router
