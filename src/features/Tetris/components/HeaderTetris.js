import React from 'react'
import '../index.css'

const HeaderTetris = () => {
  const { API_GAME } = process.env
  return (
    <React.Fragment>
      <div className="header-tetris">
      <div className="title-tetris">
        <h1>Tetris Classic Game</h1>
      </div>
      <div className="return-game">
      <button className="return-button jello-horizontal"><a className="return-textbutton" href={`${API_GAME}`} onClick={() => API_GAME} alt="">Retour à L'acceuil des jeux</a></button>
      </div>
     </div>
    </React.Fragment>
  )
}

export default HeaderTetris
