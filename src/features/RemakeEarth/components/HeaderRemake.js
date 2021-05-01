import React from "react";

const HeaderRemake = () => {
  const { API_GAME } = process.env;
  return (
    <div className="header-remake">
      <img className="App-logo-remake" src={require("../logo.svg")} alt="" />
      <h1>Remake Earth Puzzle</h1>
      <p>By Rodolphe Augusto</p>
      <div className="return-game">
        <button className="return-remake shake-horizontal">
          <a
            href={`https://amano-hilot-games.netlify.app/${API_GAME}`}
            onClick={() => API_GAME}
            alt=""
          >
            Retour à L'acceuil des jeux
          </a>
        </button>
      </div>
    </div>
  );
};

export default HeaderRemake;
