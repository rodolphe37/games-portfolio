import React from 'react';
import './returnButton.css'

const ReturnButton = () => {
  const { URL_GAME } = process.env
  return (
    <button className="return-match3 vibrate-1"><a  href={`${URL_GAME}`} onClick={() => URL_GAME} alt="">Retour à L'acceuil des jeux</a></button>
  )
}

export default ReturnButton;
