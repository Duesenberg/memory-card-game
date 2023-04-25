import React from "react";
import CardsList from "./CardsList";

export default function Main(props) {
  return(
    <div className="main">
      <CardsList 
        cards={props.cards} 
        setCardToClicked={props.setCardToClicked} 
        playSound={props.playSound} checkForGameOver={props.checkForGameOver}
        checkForWin={props.checkForWin} updateScore={props.updateScore}
        shuffleCardArray={props.shuffleCardArray} />
    </div>
  )
}