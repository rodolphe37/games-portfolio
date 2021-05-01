import React from "react";
import "./Game.css";
import GameContainer from "./GameContainer/GameContainer.js";
import { Button } from "../../../../common/styles";

class Game extends React.Component {
  render() {
    // const { URL_GAME } = process.env;
    return (
      <div className="containerOuter">
        <div className="containerInner">
          <div className="head">
            <img
              className="logoGame"
              src={require("../../assets/images/yoga.svg")}
              alt=""
            />
            <img
              className="App-logo"
              src={require("../../assets/images/mandala.png")}
              alt=""
            />
            <h1 className="header-memory">Memory Yoga Cards Game</h1>
            <p id="paragraphe">By Rodolphe Augusto</p>
            <div className="return-game">
              <Button className="return-memory heartbeat">
                <a href="/" onClick={this.href} alt="">
                  <p className="return-text-memory">
                    Retour à L'acceuil des jeux
                  </p>
                </a>
              </Button>
            </div>
          </div>
          <GameContainer />
        </div>
      </div>
    );
  }
}

export default Game;
