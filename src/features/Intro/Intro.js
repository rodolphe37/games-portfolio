import React, { useState } from "react";
import './intro.css'
import Car from "./components/Car/Car";
import Bubble from "./components/Bubble/Bubble";
import House from "./components/House/House";
import Rain from "./components/Rain";
import Sun from "./components/Sun";
// import Ballon from "./components/Ballon";
import Bird from "./components/Bird";
import Rainbow from "./components/Rainbow";

import { useImagesContext } from "../../contexts/ImagesContext";

import { CarWithBubble, Bottom } from "./styles";
import Header from "./Header";


export default props => {
  const [selectedGame, setSelectedGame] = useState(false);
  const { images } = useImagesContext();
  const selectGameHandler = game => {
    setSelectedGame(true);
    setTimeout(() => props.history.push("/" + game), 1500);
  };

  return (
    <>
      <Header />
      <Sun img={images["sun.svg"]} />
      {/*<Ballon id="ballon" img={images["ballon.svg"]} />*/}
      <Bird />
      <House />
      <Rain img={images["rain.svg"]} />
      <Rainbow img={images["rainbow.png"]} />
      <CarWithBubble>
        <Bubble selectedGame={selectedGame} selectGame={selectGameHandler} />
        <Car selectedGame={selectedGame} />
      </CarWithBubble>

      <Bottom>

        <div className="bottom-link" style={{ display: "float" }}>
          <img src={images["stars.svg"]} alt="github" style={{ width: 20 }} />Disponible sur PC, Mac et Linux sur<a href="https://github.com/rodolphe37/install-games-repository/blob/master/README.md" title="Jeux disponibles pour Windows, Mac et Linux" target="_blank" rel="noopener noreferrer">github</a>{" "}
          <img src={images["stars.svg"]} alt="github" style={{ width: 20 }} />Mes produits dérivés sur<a href="https://www.redbubble.com/fr/people/rodolphe-a/shop?asc=u&ref=account-nav-dropdown" title="Mes produits dérivés" target="_blank" rel="noopener noreferrer">RedBubble</a>{" "}
          <img src={images["stars.svg"]} alt="github" style={{ width: 20 }} />Mon Livre 42 Postures de Yoga sur<a href="https://www.thebookedition.com/fr/42-postures-de-yoga-et-etirements-p-368479.html" title="Mon Livre 42 Postures de Yoga et étirements" target="_blank" rel="noopener noreferrer">The Book Edition</a>{" "}
        </div>
      </Bottom>
    </>
  );
};
