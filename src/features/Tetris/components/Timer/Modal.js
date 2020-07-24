import React from 'react';
import './Modal.css'
import { GAME_STATE } from './Timer-test';
import '../../App.css'
// import lorem from '../Notification/lorem'

const reloadGame = () => {
  window.location.reload(false);
}


const Modal = ({ gameState, startGame, resetGame, count, victory, score }) => {
  // const ref = useRef(null)
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

  return (
    <div className="modal modal-sm active">
      <div className="modal-overlay" />
      <div className="modal-container">
        <div className="modal-header">
          <div className="modal-title h4"></div>
        </div>
        <div className="modal-body">
          <div className="content h6">
            {' '}
            {gameState === GAME_STATE.READY
              ? <div className="polaroid">
                <div className="earth">
                  {/*<img src={require('')} alt="" />*/}
                </div>
                <div className="parag">
                  <h2>Tetris Classic Game</h2>
                  <p>
                    Le Tetris classique de notre jeunesse.
                </p>
                  Je crois que tous le monde connait la règle du jeu...
                <p className="orange">
                    quasiment identique mais sans la musique de fond, histoire de jouer avec la musique de votre choix ;-)
                </p>
                  <p className="red">
                    Alors Bonne Partie de Tetris à vous !
                </p>
                </div>
              </div>
              : <div className="polaroid">
                <div className="stars">
                  {/*<img src={require('')} alt="" />*/}
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
