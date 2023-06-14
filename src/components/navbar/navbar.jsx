// import React from 'react'
import "./navbar.css";
import { Link } from "react-router-dom";

function navbar() {
  return (
    <div className="app">
      <div className="nav">
        <Link to="/" style={{ textDecoration: "none" }}>
          <div>compaines</div>
        </Link>
        <div> services</div>
        <div>login</div>
        <div> register</div>
      </div>
    </div>
  );
}

export default navbar;
