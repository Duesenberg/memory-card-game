import { useEffect, useState } from "react";
import uniqid from "uniqid";
import Header from "./components/Header";
import Main from "./components/Main";
import { easyArray, mediumArray, hardArray } from './cardArrays';
import clickSound from "./assets/clickSound.mp3";

function App() {
  const [score, setScore] = useState(0);
  const [sound, setSound] = useState(false);
  const [gameOver, setGameOver] = useState(false);
  const [win, setWin] = useState(false);
  const [difficulty, setDifficulty] = useState('Easy');
  const [gameStart, setGameStart] = useState(false);
  const [cards, setCards] = useState([]);

  const toggleSound = () => {
    sound === false ?
      setSound(true) :
      setSound(false);
  }

  const playSound = () => {
    const audio = new Audio(clickSound);
    if (sound === true) audio.play();
  }

  const setCardToClicked = (e) => {
    let cardsCopy = cards;
    cardsCopy.map((card) => {
      if (card.id === e.target.id) card.clicked = true;
    });
    setCards(cardsCopy);
  }

  const checkForGameOver = (e) => {
    cards.forEach((card) => {
      if (card.id === e.target.id && card.clicked === true) setGameOver(true);
    });
  }

  const checkForWin = () => {
    let win = true;
    cards.forEach(card => {
      if (card.clicked === false) win = false;
    })
    setWin(win);
  }

  const updateScore = () => {
    let score = 0;
    cards.forEach(card => {
      if (card.clicked === true) score += 1;
    })
    setScore(score);
  }

  const shuffleCardArray = () => {
    let cardArray = cards;
    for (let i = cardArray.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [cardArray[i], cardArray[j]] = [cardArray[j], cardArray[i]];
    }
    setCards(cardArray);
  }

  const createCardArray = () => {
    if (difficulty === 'Easy') setCards(easyArray);
    if (difficulty === 'Medium') setCards(mediumArray);
    if (difficulty === 'Hard') setCards(hardArray);
  }

  const setGameDifficulty = async (e) => {
    if (e.target.id === 'easy') setDifficulty('Easy');
    if (e.target.id === 'medium') setDifficulty('Medium');
    if (e.target.id === 'hard') setDifficulty('Hard');
  }

  const startGame = () => setGameStart(true);

  const restartGame = () => {
    setScore(0);
    setGameOver(false);
    setWin(false);
    setDifficulty('Easy');
    setGameStart(false);
    setCards([]);
  }

  return (
    <div className="App">
      <Header 
        score={score} sound={sound} toggleSound={toggleSound}
        playSound={playSound} />
      <Main 
      cards={cards} setCardToClicked={setCardToClicked}
      playSound={playSound} checkForGameOver={checkForGameOver}
      checkForWin={checkForWin} updateScore={updateScore}
      shuffleCardArray={shuffleCardArray} gameStart={gameStart}
      createCardArray={createCardArray} setGameDifficulty={setGameDifficulty}
      startGame={startGame} difficulty={difficulty} gameOver={gameOver}
      win={win} score={score} restartGame={restartGame} />
    </div>
  );
}

export default App;
