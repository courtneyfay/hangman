import React, { Component } from 'react';
import './guesses.css';

class Guesses extends Component {
	constructor(props){
		super(props)
	}

	render(){
		return(
			<div className="guesses">
				<p>I am the Guesses div</p>
			</div>
		)
	}
}

export default Guesses