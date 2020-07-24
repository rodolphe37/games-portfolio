import React from 'react';
import './Modal.css'

import { GAME_STATE, getSeconds } from './Timer-test';

const HeaderTime = ({ timeLeft, gameState, endGame }) => (
  <header className="navbar-guessing">
    {gameState === GAME_STATE.PLAYING && (
      <>
        <section className="navbar-guessing-center text-error"><p>{getSeconds(timeLeft)} Secondes restantes</p></section>
        <section className="navbar-guessing-center">
          <button className="reload" onClick={endGame}>
            Terminer la partie
          </button>
        </section>
      </>
    )}
  </header>
);

export default HeaderTime;
