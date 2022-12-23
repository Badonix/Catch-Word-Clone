import React from "react";
import { Link } from "react-router-dom";

function NoPage() {
  return (
    <div className="noPage">
      <h2>404</h2>
      <h1>This page doesn't exist :(((</h1>
      <Link to="/">
        <button>Return to Menu</button>
      </Link>
    </div>
  );
}

export default NoPage;
