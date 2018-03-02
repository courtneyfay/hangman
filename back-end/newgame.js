const request = require('request')
const API_URL = 'http://flask-hangman-api.herokuapp.com/'

let newGame = (req, res) => {
	let options = {
		method: 'GET',
		url: API_URL
	}

	request(options, (error, response, body) => {
		if (!error && response.statusCode === 200) {
			let result = res.json(JSON.parse(body))
			// console.log(body)
			return result
		}
		return response.statusCode || 500
	})
}

module.exports = newGame