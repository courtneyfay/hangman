const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const newGame = require('./routes')
const app = express()
const port = process.env.PORT || 5000

app.use(cors())

// ROUTES TO API
app.get('/api/game', newGame)

app.listen(port, () => 
	console.log(`Listening on port ${port}`)
)