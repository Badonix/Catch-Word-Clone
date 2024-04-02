import React from "react";
import { useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { useGlobalContext } from "../context";
function LeaderBoard() {
  const { setLeaderBoard, leaderBoard, baseURL } = useGlobalContext();
  const url = `${baseURL}/api/scores/top`;

  useEffect(() => {
    axios.get(url).then((response) => {
      setLeaderBoard(response.data);
    });
  }, []);
  return (
    <section className="leaderboard-section">
      <div className="leaderboard-cont">
        <h2>Leaderboard</h2>
        <div className="leaderboard-users">
          {leaderBoard.map((el, i) => {
            return (
              <div key={i} className="leaderboard-user">
                <p>N{i + 1}</p>
                <p>{el.Author}</p>
                <p>{el.Score}</p>
              </div>
            );
          })}
        </div>
        <Link to="/">
          <button>Back</button>
        </Link>
      </div>
    </section>
  );
}

export default LeaderBoard;
