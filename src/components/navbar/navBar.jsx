import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

const NavBar = (props) => {
  return (
    <>
      <div className="navBar">
        <div>
          <h1>JUMANJI</h1>
        </div>
        <div className="nav-link-styles">
          <div>
            <Link className="link-style" to="/">
              Sign Up
            </Link>
          </div>
          <div>
            <p className="link-style" onClick={() => props.openModal()}>
              Log In
            </p>
          </div>
          <button onClick={() => props.openModal()}>SELL</button>
        </div>
      </div>
    </>
  );
};

export default NavBar;
