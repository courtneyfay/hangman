const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const newGame = require('./newgame')
const guess = require('./guess')
const app = express()
const port = process.env.PORT || 5000

app.use(cors())
app.use(bodyParser.json())

// ROUTES TO API
app.get('/api/game', newGame)
app.post('/api/guess', guess)

app.listen(port, () => 
	console.log(`Listening on port ${port}`)
)