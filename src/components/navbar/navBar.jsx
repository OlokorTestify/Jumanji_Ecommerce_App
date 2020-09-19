import React from "react";
import { Router, Link } from "react-router-dom";
import IsLoggedIn from "./ISloggedin/index";
import NotLoggedIn from "./NotLoggedIn/index";
import history from "../../utils/history";
import "./style.css";

const NavBar = (props) => {
  const handleClick = () => {
    history.push("/");
  };
  const handleChange = () => {
    !props.isLoggedIn ? props.openModal("login") : history.push("/");
  };
  return (
    <>
      <Router history={history}>
        <div className="navBar">
          <div>
            <h1 onClick={handleClick}>JUMANJI</h1>
          </div>
          <div className="nav-link-styles">
            {!props.isLoggedIn ? (
              <NotLoggedIn openModal={props.openModal} />
            ) : (
              <IsLoggedIn />
            )}
            <button className="button" onClick={handleChange}>
              SELL
            </button>
          </div>
        </div>
      </Router>
    </>
  );
};

export default NavBar;
