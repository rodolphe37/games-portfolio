import React, { useContext, useState, useEffect } from "react";
import DragItem from "./components/DragItem";
import { Grid, GridImage, GridItem } from "./components/Grid";
import GridContext from "./components/GridContext";
import ScoreWindow from "./components/ScoreWindow";
import "./App-remake.css";
import HeaderRemake from "./components/HeaderRemake";
import "./components/Modal.css";
import ExplodingModal from "./components/ExplodingModal/ExplodingModal";

const reloadGame = () => {
  window.location.replace("/");
};

const filterInt = function (value) {
  if (/^(-|\+)?(\d+|Infinity)$/.test(value)) return Number(value);
  return NaN;
};

function Remake(incrementScore) {
  const { items, moveItem } = useContext(GridContext);
  const [count, setCount] = useState(0);
  const [score, setScore] = useState(8100);
  const dragId = [0];
  let isMatch = [items];
  let isTotalMatch = 19;

  const decrementTotalMatch = () => {
    isTotalMatch = isTotalMatch - 1;
    return isTotalMatch;
  };

  let depl = () => {
    if (count < 2) {
      return (depl = "déplacement");
    } else {
      return (depl = "déplacements");
    }
  };

  let alertMe = () => {
    if (score < -8100) {
      return reloadGame();
    }
  };

  useEffect(() => {
    document.title = `Vous avez fait ${count} ${depl()}`;
  });
  const WinGame = () => {
    return <p>Vou avez gagné, Bravo !!</p>;
  };

  return (
    <div className="App-remake">
      <div className="explod-modal">
        {count >= 60 ? <ExplodingModal /> : null}
      </div>
      <HeaderRemake />
      <div className="container-remake">
        <ScoreWindow
          count={count}
          score={score}
          dragId={dragId}
          isTotalMatch={isTotalMatch}
        />
        <Grid
          className="gridKey"
          onDragEnd={() => setCount(count + 1)}
          onDragStart={
            count <= 20
              ? () => setScore(score - 75)
              : () => setScore(score - 225)
          }
          alertMe={alertMe()}
          increment={incrementScore}
        >
          {items.map((item) => (
            <DragItem key={item.id} id={item.id} onMoveItem={moveItem}>
              <GridItem id={dragId[0]++}>
                <GridImage id={item.id} src={item.src}></GridImage>
                {(isMatch = isMatch = () => filterInt(item.id) === dragId[0])}
                {console.log(dragId[0])}
                {console.log(filterInt(item.id))}
                {console.log("")}
                {console.log(isMatch())}
                {console.log("")}
                {console.log(isTotalMatch)}
                {filterInt(item.id) === dragId[0]
                  ? console.log("yes!!!")
                  : console.log("")}
                {isMatch(true) === true
                  ? decrementTotalMatch() &&
                    console.log("Très bien, c'est bon !!!")
                  : console.log("c'est pas bon!!!")}
                {isTotalMatch === 0 ? <WinGame /> : null}
              </GridItem>
            </DragItem>
          ))}
        </Grid>
      </div>
    </div>
  );
}

export default Remake;
