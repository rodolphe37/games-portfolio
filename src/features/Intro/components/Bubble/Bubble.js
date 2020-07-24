import React, { useRef } from "react";
import { useSpring, useChain, animated } from "react-spring";
import '../../tooltip-style.css'
import './bubble.css';
import { useImagesContext } from "../../../../contexts/ImagesContext";
import Game from "./Game";

import { Dialog, Circular, Games } from "./styles";

export default props => {
  const { selectedGame, selectGame } = props;
  const { images } = useImagesContext();

  const springRef = useRef();

  const propsBubble = useSpring({
    from: {
      opacity: selectedGame ? 1 : 0,
      transform: `scale(${selectedGame ? 1 : 0}) translateY(30px)`
    },
    to: [
      {
        opacity: selectedGame ? 0 : 1,
        transform: `scale(${selectedGame ? 0 : 1}) translateY(30px)`
      },
      {
        opacity: selectedGame ? 0 : 1,
        transform: `scale(${selectedGame ? 0 : 1}) translateY(0px)`,
        config: { duration: 250 }
      }
    ],
    ref: springRef,
    immediate: selectedGame
  });

  const gamesRef = useRef();
  const propsGames = useSpring({
    from: {
      transform: `scale(${selectedGame ? 1 : 0})`
    },
    to: [
      {
        transform: `scale(${selectedGame ? 0 : 1})`
      }
    ],
    ref: gamesRef,
    immediate: selectedGame
  });

  useChain([springRef, gamesRef], [selectedGame ? 0 : 2, selectedGame ? 0 : 3.25]);

  return (
    <Dialog >
      <animated.div style={{ position: "relative", ...propsBubble }}>
        <Circular>Hey, A quoi veux tu jouer ?</Circular>
      </animated.div>
      <Games id="linkgame" style={propsGames}>
        <div
          className="remake-link"
          data-tooltip="!! REMAKE EARTH PUZZLE !! &#xa; &#xa; Remettez la planète en forme ! &#xa; &#xa; Notre Terre est sans dessus-dessous, déplacez les pièces du puzzle et remettez la planète en forme &#xa; &#xa; ...faites le rapidement et avec le moins de mouvements possible pour avoir un meilleur score..."
          data-tooltip-location="bottom">
          <Game click={() => selectGame('Remake')} img={images["earth-pollution.png"]} />
        </div>
        <span className="asanas-link"
          data-tooltip="!! ASANAS GUESSING GAME !! &#xa; &#xa; Devinez le nom de l'Asana de Yoga! Vous avez une illustration... et quatre choix de nom !!! Quand la réponse est bonne le fond du panel de jeu devient vert, sinon, il devient rouge !&#xa; &#xa; vous avez 600 secondes (10 minutes) à chaque partie, Apprennez en vous amusant !&emsp;!! PS: CE JEU ETANT ENCORE EN PHASE DE TEST, IL N'EST PAS ENCORE COMPATIBLE AVEC FIREFOX !!"
          data-tooltip-location="top"><Game click={() => selectGame('AsanasGuessing')} img={images["bow_half_L.png"]} />
        </span>

        <div
          className="tetris-link"
          data-tooltip="!! TETRIS CLASSIC GAME !! &#xa; &#xa; Le Tetris classique de notre jeunesse. Je crois que tous le monde connait la règle du jeu... &#xa; &#xa; quasiment identique mais sans la musique de fond, histoire de jouer avec la musique de votre choix ;-) Alors Bonne Partie de Tetris à vous !"
          data-tooltip-location="bottom">
          <Game click={() => selectGame('tetris')} img={images["transparent-blocks.png"]} />
        </div>
        <div
          className="memory-link"
          data-tooltip="!! MEMORY YOGA CARDS GAME !! &#xa; &#xa; Trouvez toutes les paires correspondantes: sélectionnez deux cartes et voyez si elles correspondent. Si oui, alors elles disparaîtront du tableau. Si non, les cartes se retournent.  &#xa; &#xa; Gagnez une partie parfaite en trouvant toutes les paires sans retourner une carte plus de deux fois."
          data-tooltip-location="left">
          <Game click={() => selectGame('memory')} img={images["yoga.svg"]} />
        </div>
        <div
          className="match3-link"
          data-tooltip="!! MATCH 3 YOGA GAME !! &#xa; &#xa; Alignez les positions 'asanas' par trois identiques minimum. Attention vous n'avez que 180 secondes (3 minutes), &#xa; &#xa; ...faites le rapidement pour avoir un meilleur score..."
          data-tooltip-location="left">
          <Game click={() => selectGame('match3')} img={images["cat4.png"]} />
        </div>
      </Games>
    </Dialog>
  );
};
