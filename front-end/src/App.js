import React, { Component } from 'react';
import './App.css';
import Header from './components/header';
import Middle from './components/middle';
import Bottom from './components/bottom';
import requestAPI from './Api';

class App extends Component {
	constructor(props){
		super(props)
		this.state = {}
	}

	componentWillMount() {
		requestAPI("game", "GET")
			.then(results => {
				this.setState({
					action: results.action,
					guess_result: results.guess_result,
					wrong_guesses: results.new_state.guesses,
					word_so_far: results.new_state.word_so_far,
					actual_word: results.new_state.actual_word,
					guesses_left: 8
				})
			})
			.catch(err => console.log(err))
	}

  render() {
    return (
      <div className="App">
        <Header />
        <Middle action={this.state.action} guess_result={this.state.guess_result} wrong_guesses={this.state.wrong_guesses} word_so_far={this.state.word_so_far} actual_word={this.state.actual_word} guesses_left={this.state.guesses_left} />
        <Bottom />
      </div>
    );
  }
}

export default App;
