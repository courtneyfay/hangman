import React, { Component } from 'react'
import './keyboard.css'

class Keyboard extends Component {
	render() {
		// const 
		const qwerty1 = [ "q","w","e","r","t","y","u","i","o","p" ]
		const qwerty2 = [ "a","s","d","f","g","h","j","k","l" ]
		const qwerty3 = [ "z","x","c","v","b","n","m" ] 

		return (
			<div>
				<p>Game is going -- show keyboard</p>
				<div className="qwerty-row">
					{ qwerty1.map((item,i) => <button key={i} className="qwerty-button">{qwerty1[i]}</button>) }
				</div>
				<div className="qwerty-row">
					{ qwerty2.map((item,i) => <button key={i} className="qwerty-button">{qwerty2[i]}</button>) }
				</div>
				<div className="qwerty-row">
					{ qwerty3.map((item,i) => <button key={i} className="qwerty-button">{qwerty3[i]}</button>) }
				</div>
			</div>
		)
	}
}

export default Keyboard