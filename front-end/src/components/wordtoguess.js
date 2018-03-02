import React, { Component } from 'react';
import './wordtoguess.css';

class WordToGuess extends Component {
	constructor(props){
		super(props)
	}

	render(){
		const { word_so_far, actual_word } = this.props
		
		return(
			<div className="word-to-guess">
				<ul>
					{ this.props.word_so_far ?	
						Object.keys(this.props.word_so_far).map(function(key) {
					    return <li key={key} className="letter-of-word">{word_so_far[key]}</li>
						}) 
					: null }
				</ul>
				
			</div>
		)
	}
}

export default WordToGuess