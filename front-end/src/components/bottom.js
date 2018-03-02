import React, { Component } from 'react';
import './bottom.css';
import Keyboard from './keyboard'
import EndGameMessage from './endgame'

class Bottom extends Component {

	render() {
		const { action, guess_result, wrong_guesses, word_so_far, actual_word, guesses_left } = this.props

		return(
			<div className="bottom-section">
				{
					{actual_word} ?
						<Keyboard wrong_guesses={wrong_guesses} word_so_far={word_so_far}/> 
						: 
						<EndGameMessage />
				}
			</div>
		)
	}
}

export default Bottom