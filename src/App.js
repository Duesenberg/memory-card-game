import { useEffect, useState } from "react";
import uniqid from "uniqid";
import Header from "./components/Header";
import Main from "./components/Main";
import clickSound from "./assets/clickSound.mp3";

function App() {
  const [score, setScore] = useState(0);
  const [sound, setSound] = useState(false);
  const [gameOver, setGameOver] = useState(false);
  const [win, setWin] = useState(false);
  const [difficulty, setDifficulty] = useState(null);
  const [gameStart, setGameStart] = useState(false);
  const [cards, setCards] = useState([{
      content: '24',
      clicked: false,
      id: uniqid()
    },
    {
      content: '88',
      clicked: false,
      id: uniqid()
    },
    {
      content: '67',
      clicked: false,
      id: uniqid()
    },
    {
      content: '68',
      clicked: false,
      id: uniqid()
    },
    {
      content: '88',
      clicked: false,
      id: uniqid()
    },
    {
      content: '67',
      clicked: false,
      id: uniqid()
    },
    {
      content: '68',
      clicked: false,
      id: uniqid()
    },
    {
      content: '68',
      clicked: false,
      id: uniqid()
    },
  ]);

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

  return (
    <div className="App">
      <Header 
        score={score} sound={sound} toggleSound={toggleSound}
        playSound={playSound} />
      {gameStart === true ?
      <Main 
      cards={cards} setCardToClicked={setCardToClicked}
      playSound={playSound} checkForGameOver={checkForGameOver}
      checkForWin={checkForWin} updateScore={updateScore}
      shuffleCardArray={shuffleCardArray} /> : null
      }

    </div>
  );
}

export default App;
