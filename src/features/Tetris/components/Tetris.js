import React, { useState } from 'react';

import { createStage, checkCollision } from '../gameHelpers';

import '../index.css'
// Styled Components
import { StyledTetrisWrapper, StyledTetris } from './styles/StyledTetris';

// Custom Hooks
import { useInterval } from '../hooks/useInterval';
import { usePlayer } from '../hooks/usePlayer';
import { useStage } from '../hooks/useStage';
import { useGameStatus } from '../hooks/useGameStatus';

// Components
import Stage from './Stage';
import Display from './Display';
import StartButton from './StartButton';
import Timer from './Timer/Timer-test';
import StopButton from './StopButton';
import Notif from './Notification/Notif';



const Tetris = ({ timeLeft, gameState, endGame }) => {
  const [dropTime, setDropTime] = useState(null);
  const [gameOver, setGameOver] = useState(false);
  const { API_GAME } = process.env
  const [player, updatePlayerPos, resetPlayer, playerRotate] = usePlayer();
  const [stage, setStage, rowsCleared] = useStage(player, resetPlayer);
  const [score, setScore, rows, setRows, level, setLevel] = useGameStatus(
      rowsCleared
    );

  console.log('re-render');

  const movePlayer = dir => {
    if (!checkCollision(player, stage, { x: dir, y: 0 })) {
      updatePlayerPos({ x: dir, y: 0 });
    }
  }

  const startGame = () => {
    console.log("test")
    // Reset everything
    setStage(createStage());
    setDropTime(1000);
    resetPlayer();
    setGameOver(false);
    setScore(0);
    setRows(0);
    setLevel(0);
  }

  const drop = () => {
    // increase level when player has cleared 10 rows
    if(rows > (level + 1)* 10) {
        setLevel(prev => prev + 1);
        // Also increase speed
        setDropTime(1000 / (level +1) + 200);
    }

    if (!checkCollision(player, stage, { x: 0, y: 1 })) {
      updatePlayerPos({ x: 0, y: 1, collided: false })
    } else {
      // Game Over
      if (player.pos.y < 1) {
        console.log("GAME OVER!!!");
        setGameOver(true);
        setDropTime(null);
      }
      updatePlayerPos({ x: 0, y: 0, collided: true });
    }
  }

  // const Notific = () => {
  //   if(Notif){
  //     return startGame
  //   }else{
  //     return null
  //   }

  // }

  const keyUp = ({ keyCode }) => {
      if(!gameOver){
          if(keyCode === 40) {
            console.log("interval on")
              setDropTime(1000 / (level +1) + 200);
          }
      }
  }

  const dropPlayer = () => {
      console.log("interval off")
      setDropTime(null);
    drop();
  }

  const move = ({ keyCode }) => {
    if (!gameOver) {
      if (keyCode === 37) {
        movePlayer(-1);
      } else if (keyCode === 39) {
        movePlayer(1);
      } else if (keyCode === 40) {
        dropPlayer();
      } else if(keyCode === 38) {
          playerRotate(stage, 1);
      }
    }
  }

  useInterval(() =>  {
      drop();
  }, dropTime)

  const reloadGame = () => {
    window.location.reload(false);
  }

  return (
    <StyledTetrisWrapper
        role="button"
        tabIndex="0"
        onKeyDown={e => move(e)}
        onKeyUp={keyUp}
    >
      <StyledTetris>
        <Stage stage={stage} />
        <aside>
          {gameOver ? (
            <Display gameOver={gameOver} text="Game Over" />
          ) : (
            <div>
            {level === level + 1 ? () => <Notif /> : null}
              <Timer />
              <Display text={`Score: ${score}`} />
              <Display text={`Colonnes: ${rows}`} />
              <Display text={`Niveau: ${level}`} />
              {/*<Display text={`Temps restant: ${timeLeft} secondes`} />*/}
            </div>
          )}
          <StartButton callback={startGame } />
          <StopButton callback={reloadGame} />
          <button className="return-button jello-horizontal"><a className="return-textbutton" href={`${API_GAME}`} onClick={() => API_GAME} alt="">Retour à L'acceuil des jeux</a></button>
        </aside>
        <div className="aside2">
        <div className="colorBack">
          <h3 style={{marginTop:'5px'}}>Tetris Classic Game</h3>
          <p className="text-colorBack">By Rodolphe Augusto</p>
          </div>
          {/*<Notif />*/}
        </div>
      </StyledTetris>
    </StyledTetrisWrapper>
  );
};

export default Tetris;
