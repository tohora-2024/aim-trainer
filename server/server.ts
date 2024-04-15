import express from 'express'
import * as Path from 'node:path'
import gamemodeRoutes from './routes/gamemodeRoutes.ts'
import playerRoutes from './routes/playerRoutes.ts'
import joinRoutes from './routes/joinRoutes.ts'

const server = express()

server.use(express.json())

server.use('/api/v1/gamemode', gamemodeRoutes)
server.use('/api/v1/player', playerRoutes)
server.use('/api/v1/join', joinRoutes)

if (process.env.NODE_ENV === 'production') {
  server.use(express.static(Path.resolve('public')))
  server.use('/assets', express.static(Path.resolve('./dist/assets')))
  server.get('*', (req, res) => {
    res.sendFile(Path.resolve('./dist/index.html'))
  })
}

export default server
