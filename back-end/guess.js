const request = require('request')
const API_URL = 'http://flask-hangman-api.herokuapp.com/'

let guess = (req, res) => {
	let letter = req.body.letter
	let newUrl = API_URL + "guess/" + letter
	console.log(newUrl)
	
	let options = {
		method: 'GET',
		url: newUrl
	}

	request(options, (error, response, body) => {
		if (!error && response.statusCode === 200) {
			let result = res.json(JSON.parse(body))
			console.log(body)
			return result
		}
		return response.statusCode || 500
	})
}

module.exports = guess