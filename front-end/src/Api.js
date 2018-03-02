export const API_URL = '/api'

export default function requestAPI(route, method = 'GET', body) {
	let url = `${API_URL}/${route}`
	console.log(url)
	console.log(method)
	console.log(body)
	console.log(JSON.stringify(body))
	console.log(typeof(JSON.stringify(body)))
	let newBody = body ? JSON.stringify(body) : null
	console.log(newBody)

	return fetch(url, {
		method: method,
		headers: {
			'Accept': 'application/json',
			'Content-Type': 'application/json'
		},
		body: newBody
	})
	.then(response => response.json().then(
		json => ({json, response}))
	)
	.then(({json, response}) => {
		console.log(json)
		if (!response.ok) {
			return Promise.reject(json)
		}
		return json
	})
	.catch((error) => {
		console.error(error)
	})
}