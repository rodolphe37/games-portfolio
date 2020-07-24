import React from 'react';
import './Modal.css'
import { GAME_STATE } from './Timer-test';
import '../App-remake.css'

const reloadGame = () => {
  window.location.reload(false);
}



const Modal = ({ gameState, startGame, resetGame, count, score }) => {

  let mov = () => {
    if (count < 2) {
      return mov = "mouvement"
    } else {
      return mov = "mouvements"
    }
  }

  let dot = () => {
    if (score < 2) {
      return dot = "Point"
    } else {
      return dot = "Points"
    }
  }


  let color = () => {
    if (score <= 0) {
      return <div className="red">Vous avez {score} {dot()}</div>
    }
    if (score <= 3150) {
      return <div className="orange">Vous avez {score} {dot()}</div>
    }
    else {
      return <div className="blue" >Vous avez {score} {dot()}</div>
    }
  }

  // let stars = () => {
  //   if(score >= 2150) {
  //     return (<img src={require('../quizz-images/etoile/full-star.png')} alt=""/>)
  //   }
  //   if (score <= 1800) {
  //     return (<img src={require('../quizz-images/etoile/medium-star.png')} alt="" />)
  //   }
  //   if (score < 1200) {
  //     return (<img src={require('../quizz-images/etoile/empty-star.png')} alt="" />)
  //   }
  // }

  return (<div className="modal modal-sm active">
    <div className="modal-overlay" />
    <div className="modal-container">
      <div className="modal-header">
        <div className="modal-title h4"></div>
      </div>
      <div className="modal-body">
        <div className="content-modal-remake h6">
          {' '}
          {gameState === GAME_STATE.READY
            ? <div className="polaroid">
              <div className="earth">
                <img src={require('../quizz-images/earth-logo/earth-pollution.png')} alt="" />
              </div>
              <div className="parag">
                <h2>Remettez la planète en forme!</h2>
                <p>
                  Notre Terre est sans dessus-dessous,
                  déplacez les pièces du puzzle et remettez la planète en forme.
                </p>
                  Vous démarrez avec un score de 8100 points et chaque mouvement
                  fait descendre un peu plus le nombre de points. <br />
                  (ça commence à -75 points puis ensuite à -225 points à chaque déplacement).
                <p className="orange">
                  Si les points descendents en dessous de -8100 le jeu se réinitialisera tout seul.
                </p>
                <p className="red">
                  ... Attention, en plus vous n'avez que 180 secondes (3 minutes),
                  faites le rapidement et avec le moins de mouvements possible
                  pour avoir un meilleur score...
                </p>
              </div>
            </div>
            : <div className="polaroid">
              <div className="stars">
                <img src={require('../quizz-images/earth-logo/earth-globe-and-moon.png')} alt="" />
              </div>
              <div className="parag">
                <p>Vous avez effectué {count} {mov()}</p>
                <div>{color()}</div>
              </div>
            </div>
          }
        </div>
      </div>
      <div className="modal-footer">
        <button
          className="reload"
          onClick={gameState === GAME_STATE.READY ? startGame : resetGame && reloadGame}
        >
          {gameState === GAME_STATE.READY ? 'Commencer le jeu' : 'Recommencer le Jeu'}
        </button>
      </div>
    </div>
  </div>)
}
export default Modal;
