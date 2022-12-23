import { useState, useEffect } from "react";
import "../App.css";
import { useGlobalContext } from "../context";
import { useNavigate } from "react-router-dom";
import words from "../words.json";
function App() {
  const navigate = useNavigate();
  const { setCurrentScore, currentScore } = useGlobalContext();
  const [currentWord, setCurrentWord] = useState(words[0]);
  const [speed, setSpeed] = useState(1000);
  const [inputValue, setInputValue] = useState("");
  const [timeAdded, setTimeAdded] = useState(false);
  const [score, setScore] = useState(0);
  const [time, setTime] = useState(15);
  useEffect(() => {
    setCurrentScore(0);
  }, []);
  useEffect(() => {
    const speedDecrement = speed * 0.35; // Decrement speed by 5%

    if (score % 5 === 0 && score > 0 && speed - speedDecrement > 100) {
      setSpeed(speed - speedDecrement);
    }
    setCurrentScore(score);
    if (localStorage.getItem("highest")) {
      if (localStorage.getItem("highest") < score) {
        localStorage.setItem("highest", score);
      }
    } else {
      localStorage.setItem("highest", score);
    }
  }, [score]);

  useEffect(() => {
    const interval = setInterval(() => {
      setTime((prev) => {
        if (prev <= 0) {
          clearInterval(interval);

          navigate("/result");
          return prev;
        }
        return prev - 1;
      });
    }, speed);
    return () => clearInterval(interval);
  }, [speed]);

  const handleInputChange = (e) => {
    if (e.target.value == currentWord) {
      let newIndex = Math.floor(Math.random() * words.length);
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
        <div className="info-div">
          <p className={!timeAdded ? `timer` : `timer added`}>{time}s</p>
        </div>
        <div>
          <h1 className="title">Catch Word</h1>
        </div>
        <div className="info-div">
          <p className={!timeAdded ? `live-score` : `live-score score-added`}>
            {score}
          </p>
        </div>
      </div>
      <div className="input-cont">
        <h2 className="current-word">{currentWord}</h2>
        <input
          autoFocus={true}
          onChange={(e) => handleInputChange(e)}
          value={inputValue}
          type="text"
          className="word-input"
          placeholder="Type..."
        />
      </div>
      <div></div>
      <div className="footer">
        <p>
          Made By <span className="name">Badonix</span>{" "}
          <span className="jort">
            <a target={"_blank"} href="https://www.youtube.com/@Jortsoft">
              © JortSoft
            </a>
          </span>
        </p>
      </div>
    </div>
  );
}

export default App;
