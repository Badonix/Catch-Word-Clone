import { useState, useEffect } from "react";
import "./App.css";
import words from "./words.json";
function App() {
  const [currentWord, setCurrentWord] = useState(words[0]);
  const [inputValue, setInputValue] = useState("");
  const [timeAdded, setTimeAdded] = useState(false);
  const [score, setScore] = useState(0);
  const [time, setTime] = useState(15);
  useEffect(() => {
    const interval = setInterval(() => {
      setTime((prev) => {
        if (prev <= 0) {
          clearInterval(interval);
          return prev;
        }
        return prev - 1;
      });
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const handleInputChange = (e) => {
    if (e.target.value == currentWord) {
      let newIndex = Math.round(Math.random() * words.length - 1);

      setCurrentWord(words[newIndex]);
      setInputValue("");
      setTime((prev) => prev + 5);
      setTimeAdded(true);
      const interval = setInterval(() => {
        setTimeAdded(false);
        clearInterval(interval);
      }, 400);
      setScore((prev) => prev + 1);
    } else {
      setInputValue(e.target.value);
    }
  };
  return (
    <div className="App">
      <div className="top-row">
        <p className={!timeAdded ? `timer` : `timer added`}>{time}s</p>
        <h1 className="title">Catch Word</h1>
        <p className={!timeAdded ? `live-score` : `live-score score-added`}>
          {score}
        </p>
      </div>
      <div className="input-cont">
        <h2 className="current-word">{currentWord}</h2>
        <input
          onChange={(e) => handleInputChange(e)}
          value={inputValue}
          type="text"
          className="word-input"
          placeholder="Type..."
        />
      </div>
      <div></div>
    </div>
  );
}

export default App;
