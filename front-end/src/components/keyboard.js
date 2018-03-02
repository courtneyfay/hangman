import React, { Component } from 'react'
import './keyboard.css'
import requestAPI from '../Api';

class Keyboard extends Component {
	constructor(props){
		super(props)
		this.submitGuess = this.submitGuess.bind(this)
	}

	submitGuess(e) {
		let letter = {
			letter: e.target.id
		}
		/*
			After selection, the guessed letter is posted to the API via url, for example "/guess/a"
		*/
		requestAPI("guess", "POST", letter)
			.then(results => {
				console.log("made it back to the front - end")
			})
			.catch(err => console.log(err))
		
		/*
			After selection, the corresponding QWERTY button on the screen is disabled (regardless of how it was selected)
		*/

		/*
			After selection, the total number of guesses remaining goes down by 1
		*/

		/*
			After selection, check to see if game is over
		*/
	}

	render() {
		const { wrong_guesses, word_so_far } = this.props 
		const qwerty1 = [ "q","w","e","r","t","y","u","i","o","p" ]
		const qwerty2 = [ "a","s","d","f","g","h","j","k","l" ]
		const qwerty3 = [ "z","x","c","v","b","n","m" ] 

		return (
			<div>
				<div className="qwerty-row">
					{ qwerty1.map((item,i) => <button key={i} id={item} className="qwerty-button" onClick={this.submitGuess}>{qwerty1[i]}</button>) }
				</div>
				<div className="qwerty-row">
					{ qwerty2.map((item,i) => <button key={i} id={item} className="qwerty-button" onClick={this.submitGuess}>{qwerty2[i]}</button>) }
				</div>
				<div className="qwerty-row">
					{ qwerty3.map((item,i) => <button key={i} id={item} className="qwerty-button" onClick={this.submitGuess}>{qwerty3[i]}</button>) }
				</div>
			</div>
		)
	}
}

export default Keyboard