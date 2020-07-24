import React from 'react';

const HeaderGuess = () => {
  const { API_GAME } = process.env
  return (
    <div className="header-guess">
      {/*<img className="back-board" src={require('./ressources/lotus-background.png')} alt="" />*/}
      <h1>Asanas Guessing Game</h1>
      <p>By Rodolphe Augusto</p>
      <button className="return-asanas shake-horizontal"><a href={`${API_GAME}`} onClick={() => API_GAME} alt="">Retour à L'acceuil des jeux</a></button>
      {/*<img className="lotus-bottom" src={require('./ressources/pink-lotus-flower.png')} alt="" />*/}
    </div>
  )
}

export default HeaderGuess;
