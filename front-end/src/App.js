import React, { Component } from 'react';
import './App.css';
import Header from './components/header';
import Middle from './components/middle';
import Bottom from './components/bottom';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Middle />
        <Bottom />
      </div>
    );
  }
}

export default App;
