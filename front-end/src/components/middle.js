import React, { Component } from 'react';
import './middle.css';
import Guesses from './guesses';
import WordToGuess from './wordtoguess';


class Middle extends Component {

	render(){
		const { action, guess_result, wrong_guesses, word_so_far, actual_word, guesses_left } = this.props

		return(
			<div className="middle-section">
				<Guesses guess_result={guess_result} guesses_left={guesses_left} />
				<WordToGuess word_so_far={word_so_far} actual_word={actual_word} />
			</div>
		)
		
	}
}

export default Middle