import React from 'react';
import Timer from './Timer-test';


const ScoreWindow = ({ item, count, score, isTotalMatch, dragId, }) => {

  let scoring = () => {
    if (count < 6) {
      return null;
    }
    if (score <= 0) {
      return <div className="red"><span>Votre Score : {score}</span></div>
    } else {
      return (`Votre Score : ${score}`)
    }
  }

  let mov = () => {
    if (count < 2) {
      return mov = "mouvement"
    } else {
      return mov = "mouvements"
    }
  }


  let stars = () => {
    if (count > 6 && score >= 3150) {
      return (<img src={require('../quizz-images/etoile/full-star.png')} alt="" />)
    }
    if (score <= 3150) {
      return (<img src={require('../quizz-images/etoile/medium-star.png')} alt="" />)
    }
    if (count > 6 && score <= 1100) {
      return (<img src={require('../quizz-images/etoile/empty-star.png')} alt="" />)
    }
  }

  return (
    <div className="scoreView" >
      <Timer count={count} score={score} item={item} dragId={dragId} isTotalMatch={isTotalMatch} />
      <p>Vous avez effectué</p><p> {count} {mov()}</p>
      <div className="scoring">{scoring()}</div>
      <div className="star">{score <= 800 ? <img src={require('../quizz-images/etoile/empty-star.png')} alt="" /> : stars() && score <= 0 ? null : stars()}</div>
      <img src={require('../quizz-images/earth/big1.jpg')} alt="beautiful World" />
    </div>
  )
}

export default ScoreWindow;
