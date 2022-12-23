import React from "react";
import { Link } from "react-router-dom";
import "../App.css";
function Home() {
  return (
    <div className="main-cont">
      <div className="main-div">
        <h1>Catch Word</h1>
        <Link to="/play">
          <button>PLAY!</button>
        </Link>
        {localStorage.getItem("highest") && (
          <h2>Highest Score: {localStorage.getItem("highest")}</h2>
        )}
      </div>
    </div>
  );
}

export default Home;
