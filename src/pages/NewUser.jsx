import React from "react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { useGlobalContext } from "../context";
import axios from "axios";
import { useNavigate } from "react-router-dom";
function NewUser() {
  const navigate = useNavigate();
  const { username, setUsername } = useGlobalContext();
  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const submitUsername = () => {
    if (username) {
      let score = { author: username, score: 0 };
      axios
        .post("http://127.0.0.1:1331/api/scores", score)
        .then((response) => {
          console.log(response);
          localStorage.setItem("uid", response.data._id);
          navigate("/");
        })
        .catch((error) => {
          console.log(error.response.data);
          alert("Username is taken");
          return;
        });
    }
  };
  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      submitUsername();
    }
  };

  useEffect(() => {
    if (localStorage.getItem("uid")) {
      navigate("/");
    }
  }, []);
  return (
    <div className="noPage">
      <h2>Whats your name?</h2>
      <input
        type="text"
        value={username}
        maxLength={20}
        placeholder={"username"}
        onChange={(e) => handleUsernameChange(e)}
        onKeyDown={handleKeyDown}
      />

      <button onClick={submitUsername}>Submit</button>

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

export default NewUser;
