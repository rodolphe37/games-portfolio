import React from 'react';
import './Modal.css'
import { GAME_STATE } from './Timer-test';
import './App-asanas.css';
// import { connect } from 'react-redux';

const reloadGame = () => {
  window.location.reload(false);
}



const Modal = ({ gameState, startGame, resetGame, goodGuess, victory, score, }) => {

  return (console.log(goodGuess),
    < div className="modal modal-sm active" >
      <div className="modal-overlay" />
      <div className="modal-container">
        <div className="modal-header">
          <div className="modal-title h4"></div>
        </div>
        <div className="modal-body">
          <div className="content-modal-asanas h6">
            {' '}
            {gameState === GAME_STATE.READY
              ? <div className="polaroid">
                <div className="parag">
                  <h2 style={{ fontWeight: 'bold' }}>Devinez le nom de l'Asana de Yoga!</h2>
                  <b>
                    Vous avez une illustration... <br />et quatre choix de nom !!! <br />
                  Quand la réponse est bonne le fond du panel de jeu devient vert,<br /> sinon, il devient rouge !
                </b>
                  <br />
                  <b>Un indice éventuel, &nbsp;les bienfaits de la position apparente devant vous sont listés sur le panel droit.<br /> et si ce n'est pas un indice... alors cela feras un bon exercice pour mémoriser les positions avec leurs noms ainsi que les info inhérentes à celles ci</b>
                  <br />
                  <b className="orange">
                    vous avez 10 minutes à chaque partie,
                    Apprennez en vous amusant...
                </b>
                  {/* <p className="red">
                  ... Attention, Ce jeu ne se substitut pas à un professeur expérimenté, il n'a pas vocation à ça. Ce jeu est fait pour compléter votre apprentissage par le biais de jeux sur la mémoire... Toute pratique du Yoga se fait avec un avis médical positif de son médecin.
        </p>*/}
                </div>
              </div>
              : <div className="polaroid">
                <div className="parag">
                  <div>N'hesitez pas à jouer souvent afin de mémoriser les positions ainsi que les bienfaits !</div>
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
    </div >)
}
// export default connect((state) => ({state: state}))(Modal);

export default Modal;
