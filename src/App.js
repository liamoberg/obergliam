import React, { Component } from 'react';
import './App.css';
import Intro from './Components/Intro/Intro';

class App extends Component {
  render() {
    return (
      <div className="Main">
        <h1>Liam Öberg</h1>
        <Intro />
      </div>
    );
  }
}

export default App;
