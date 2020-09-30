import React from "react";
import IsLoggedIn from "./ISloggedin/index";
import NotLoggedIn from "./NotLoggedIn/index";
import history from "../../utils/history";
import "./style.css";

const NavBar = (props) => {
  const handleClick = () => {
    history.push("/");
  };
  const handleChange = () => {
    !props.isLoggedIn ? props.openModal("login") : history.push("/add_product");
  };
  return (
    <>
      <div className="navBar">
        <div>
          <h1 onClick={handleClick}>OmegaStores</h1>
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

      <div className="bottom_navbar">
        <div
          onClick={() => {
            history.push("/");
          }}
        >
          <img
            className="button_down_img"
            src="https://www.iconfinder.com/data/icons/set-app-incredibles/24/Home-01-512.png"
            alt=""
          />
          <p className="green">Home</p>
        </div>
        <div>
          <p
            className="sell_button"
            onClick={(e) => {
              if (!props.isLoggedIn) {
                props.openModal("login");
                return;
              }

              history.push("/add_product");
            }}
          >
            SELL
          </p>
        </div>
        <div>
          <span
            onClick={(e) => {
              if (!props.isLoggedIn) {
                props.openModal("login");
                return;
              }

              history.push("/profile/settings");
            }}
          >
            <img
              className="button_down_img"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRW1rDGVkSMqoU63QZPgSnSE7s-eSSkTJsnQA&usqp=CAU"
              alt=""
            />
            <p className="green">Profile</p>
          </span>
        </div>
      </div>
    </>
  );
};

export default NavBar;
