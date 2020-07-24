import React from 'react';
import './header.css'

const Header = () => {
  return (
    <div className="header">
      <h1>Les Jeux Amano-Hilot</h1>
      <p>Par Rodolphe Augusto</p>
      <img id='imgBanner' src={require('./images/logo-amano-hilot-jaune-et-rouge4.png')} alt="" />
    </div>
  )
}

export default Header;
