import React, { Component } from 'react';
import './guesses.css';

class Guesses extends Component {
	constructor(props){
		super(props)
	}

	render(){
		const { guess_result, guesses_left } = this.props

		return(
			<div className="guesses">
				<p className="number-of-guesses">{this.props.guesses_left}</p>
				<p>Guesses Left!</p>
			</div>
		)
	}
}

export default Guesses