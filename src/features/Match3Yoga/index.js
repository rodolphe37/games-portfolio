import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux';
import { createStore } from 'redux';
import './background.css'
import Game from './game';
import reducer from './reducers';
import Background from './Background';
import ReturnButton from './ReturnButton';

const store = createStore(reducer);

ReactDOM.render(
  <Provider store={store}>
    <Background />
    <div className="header-match3">
      <img className="App-logo-match3" src={require('./logo.svg')} alt="" />
      <h1 className="header-text">Match3 Yoga</h1>
      <br />
      <p className="header-text">By Rodolphe Augusto</p>
      <ReturnButton />

    </div>
    <Game />
  </Provider>,
  document.getElementById('root')
)
