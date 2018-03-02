export const API_URL = '/api'

export default function requestAPI(route, method = 'GET') {
	let url = `${API_URL}/${route}`

	return fetch(url, {
		method: method,
		headers: {
			'Accept': 'application/json'
		}
	})
	.then(response => response.json().then(
		json => ({json, response}))
	)
	.then(({json, response}) => {
		if (!response.ok) {
			return Promise.reject(json)
		}
		return json
	})
	.catch((error) => {
		console.error(error)
	})
}