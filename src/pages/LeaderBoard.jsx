import React from "react";
import { useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { useGlobalContext } from "../context";
function LeaderBoard() {
  const { setLeaderBoard, leaderBoard } = useGlobalContext();
  const baseURL = "http://127.0.0.1:1331/api/scores/top";

  useEffect(() => {
    axios.get(baseURL).then((response) => {
      setLeaderBoard(response.data);
      console.log("response");
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
        <button>
          <Link to="/">Back</Link>
        </button>
      </div>
    </section>
  );
}

export default LeaderBoard;
