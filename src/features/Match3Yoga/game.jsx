import React from 'react';
import { connect } from 'react-redux';
import 'react-responsive-modal/styles.css';
import { Modal } from 'react-responsive-modal';
import ReactPlayer from 'react-player'
import * as actions from './actions';
import Board from './board';
import './game.css'
import Timer from './Timer-test';
import Animation from './Animation';
import Movie from './res/background-71.mp4'


class Panel extends React.Component {
  reloadGame() {
    const { reloadGame } = this.props;

    reloadGame();
  }

  render(setOpen) {
    const { state, gameScore } = this.props;

    return (
      <div className="info">
        <Animation />
        <div className="info-block">
          <Timer score={gameScore} setOpen={setOpen} />
          <div className="info-item">Score:</div>
          <div className="info-item">{state.info.score}</div>
        </div>
        <div className="info-block">
          <div className="home">
            <img src={require("./res/home.png")} alt="home" />
          </div>
        </div>
        <div className="info-block">
          <button className="reload" type="button" onClick={() => this.reloadGame()}>
            Recharger la page
          </button>
        </div>

      </div>
    )
  }
};

Panel = connect((state) => ({ state: state }), actions)(Panel);


const Game = () => {
  const [open, setOpen] = React.useState(false)
  return (
    <div className="game">
      <Board />
      <div className="memory-demo" onClick={() => setOpen(true)} alt="Memory Yoga Card Game"><p>Comment jouer ?</p></div>
      <Modal open={open} onClose={() => setOpen(false)} center>
        <div className='player-wrapper-memory'>
          <h3 style={{ textAlign: 'center' }}>Cliquez sur l'image que vous souhaitez déplacer,
        <br /> puis cliquez sur l'image que vous souhaitez remplacer !!!
        </h3>
          <ReactPlayer url={Movie} controls playing={true} width='100%' height='100%' onEnded={() => setOpen(false)} />
        </div>
      </Modal>
      <Panel />
      <style jsx="true">{`
        .memory-demo {
          position: absolute;
          right: 22px;
          top: -45px;
          z-index: 500;
          cursor: pointer;
          border: 1px solid white;
          padding: 10px;
          border-radius: 5px;
        }
        .memory-demo > p {
          color: white;
          font-size:15px;
          font-family: sans-serif;
        }
        .player-wrapper-memory {
          font-family: sans-serif;
        }
      `}</style>
    </div>
  )
};

export default Game;
