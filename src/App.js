import { useEffect, useState } from "react";
import Header from "./components/Header";
import Main from "./components/Main";
import clickSound from "./assets/clickSound.mp3";

function App() {
  const [score, setScore] = useState(0);
  const [sound, setSound] = useState(false);

  const toggleSound = () => {
    sound === false ?
      setSound(true) :
      setSound(false);
  }

  const playSound = () => {
    const audio = new Audio(clickSound);
    if (sound === true) audio.play();
  }

  return (
    <div className="App">
      <Header 
        score={score} sound={sound} toggleSound={toggleSound}
        playSound={playSound} />
      <Main />
    </div>
  );
}

export default App;
