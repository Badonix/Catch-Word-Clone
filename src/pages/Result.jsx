import React from "react";
import { Link } from "react-router-dom";
import { useGlobalContext } from "../context";
import axios from "axios";
function Result() {
  const { currentScore } = useGlobalContext();
  React.useEffect(() => {
    if (currentScore > localStorage.getItem("highest")) {
      let body = { score: currentScore };
      axios
        .post(
          "http://127.0.0.1:1331/api/scores/" + localStorage.getItem("uid"),
          body
        )
        .then((response) => {
          console.log("nice");
        });
    }
  }, []);

  return (
    <div className="result-cont">
      <div className="result-div">
        <h2>veri gud! You got {currentScore} points</h2>
        <Link to="/play">
          {" "}
          <button>Play Again</button>
        </Link>
        <Link to="/">
          <button>Main Menu</button>
        </Link>
      </div>
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

export default Result;
