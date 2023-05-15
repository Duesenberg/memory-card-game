import React from "react";
import CardsList from "./CardsList";
import StartMenu from "./StartMenu";
import GameOver from "./gameOver";
import GameWon from "./GameWon";

export default function Main(props) {
  return(
    <div className="main">
      {props.gameStart === true ?
      props.gameOver === true ?
      <GameOver playSound={props.playSound} /> :
      props.win === true ?
      <GameWon restartGame={props.restartGame} playSound={props.playSound} /> :
      <CardsList 
      cards={props.cards} 
      setCardToClicked={props.setCardToClicked} 
      playSound={props.playSound} checkForGameOver={props.checkForGameOver}
      checkForWin={props.checkForWin} updateScore={props.updateScore}
      shuffleCardArray={props.shuffleCardArray} /> :
      <StartMenu 
      createCardArray={props.createCardArray} cards={props.cards}
      shuffleCardArray={props.shuffleCardArray} playSound={props.playSound}
      setGameDifficulty={props.setGameDifficulty}
      startGame={props.startGame} difficulty={props.difficulty} />
      }

    </div>
  )
}