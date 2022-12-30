import React from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import "../App.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useGlobalContext } from "../context";

function Home() {
  const baseURL = "http://localhost:1331/api/scores/";
  const navigate = useNavigate();
  useEffect(() => {
    if (!localStorage.getItem("uid")) {
      navigate("/newuser");
    }
    axios.get(`${baseURL}${localStorage.getItem("uid")}`).then((response) => {
      localStorage.setItem("highest", response.data);
    });
  }, []);
  return (
    <div className="main-cont">
      <div className="main-div">
        <h1>Catch Word</h1>
        <div className="main-btns">
          <Link to="/play">
            <button>PLAY</button>
          </Link>

          <Link to="/leaderboard">
            {" "}
            <button>Leaderboard </button>
          </Link>
        </div>

        {localStorage.getItem("highest") && (
          <h2>Highest Score: {localStorage.getItem("highest")}</h2>
        )}
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

export default Home;
