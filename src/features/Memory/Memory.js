import React, { Component } from 'react';
import Game from './components/Game/Game';
import './AppMemory.css'
import './indexMemory.css'

class Memory extends Component {
  render() {
    return (
      <div className="body-memory">
        <div className="App-memory">
          <Game />
        </div>
      </div>
    );
  }
}

export default Memory;
