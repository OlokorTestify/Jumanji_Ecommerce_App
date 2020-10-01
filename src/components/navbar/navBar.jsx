import React from "react";
import { useDispatch } from "react-redux";
import IsLoggedIn from "./ISloggedin/index";
import NotLoggedIn from "./NotLoggedIn/index";
import history from "../../utils/history";
import { logOut } from "../../store/actions";
import "./style.css";

const NavBar = (props) => {
  const dispatch = useDispatch();
  const handleSubmit = () => {
    dispatch(logOut());
    history.push("/");
  };
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
        {props.isLoggedIn ? (
          <>
            <div
              className="fa-space"
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
            <div
              className="fa-space"
              onClick={() => {
                history.push("/profile/products");
              }}
            >
              <img
                className="button_down_img"
                src="https://img.icons8.com/pastel-glyph/2x/product.png"
                alt=""
              />
              <p className="green">Product</p>
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
            <div className="fa-space-left">
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
            <div className="fa-space-left">
              <span onClick={handleSubmit}>
                <img
                  className="button_down_img"
                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAb1BMVEX///8AAAD09PTKyspRUVGenp7FxcXCwsJiYmJKSko9PT2EhIS/v798fHzo6OimpqaysrLj4+OWlpbU1NSNjY0oKChERERjY2M8PDxycnLa2tpNTU1oaGjw8PA0NDTQ0NBWVla1tbUPDw8fHx8uLi5bICU4AAADZ0lEQVR4nO3di1abQBSF4SFq2kold7SJ0drm/Z+xra0FDM3qgrPZh8P+HyDjtyYJwgwkJaWUUkoppZQaulW+y8jt8hUQuGbzfreGAXM27a0cBJyzYVVXGGHJdlWdIMAVm1UP8m2zYavqQd6mV2xVvbmEEkpIT0IJ/0N4SLNh+zi08BoxxKXuwwvjz6GEBkkITkKDJAQnoUESgpua8ANiCLKwDC+8lbB/EoKT0CCy8CG88FNj+AFWZsjCZ8QQroTx51DCTkkITkKDyMKvjeEjHi3uGsMfEUOQhXP86GRh44O4gYzAFhbV4KDNiWxhKt5OLxagAejClF4eH56utwXq5R0IfzYDvrYPITIJx5+E40/C8Sfh+JNw/Ek4QMXi7m4LuUTzGl/45965EnOG70BYXcaArK3xhV9qo2OIZOG+MXzEFdJtBie62hMFIZKFhwxOJAsf3wuzz9ZDkIU3Z0LzWSQLj+dC61lkHw8XLUTbWWQLWx94YDqLdOG7JUT7WeQLW2fRkOhACH6jehC2vlHNiC6E0Fn0IUR+Fp0IgbPoRYg7aLgRwmbRjxBFdCQEET0JMURXQshBw5cQMYvOhIBZtBAelzdmLdoecNhrFvsLZ23HauP6EHsLj094YJYticLbf/xNxnVffesrXA4DzEqacJD36K86P3Gwr3AoYPcNtj2FbVd0Ywnjz+EEPofxv0vjHw8n8D9N/P9LU/xzC9t8nh8aFv4cP/x1GsjqhSdh+OuloPUnP8Lw6xbh157Crx+GXwMOv44P3TTkQRh+P034PVHh97WBZ5AvDL+/tO2KsvE2aO3zBhd/r378+y3i3zMT/76n+Peuxb//cAL3kE7gPuAJ3MuNTsLxJ+H4k3D8STj+JBx/Eo4/D8Jis9njXp0v3L8+tfyEeowwX/j3sn4JetQuW/hSDd59k+zFyMLZt9romDcqWdhYevoOGcLVukXn3eqXcrVuEfHXH+L/goeEBkkIbmpCfZd2Sr9/CC7+b1hKaJCE4CQ0yNXZU0Rhc9fXHDGEhOAkNEhCcBIaJCE4CQ2SENz90MJDmg3b4HNITkIJJeQnoYStbdiqepCVmRVbVQ+yFyOVbFbVCQJMc7arCvIxTGe3cfLKQcDWO8YZrWHAlIpt26P8Bm2XY75llFJKKaWUUupiPwCvakAP0y1rSQAAAABJRU5ErkJggg=="
                  alt=""
                />
                <p className="green">Log out</p>
              </span>
            </div>
          </>
        ) : (
          <>
            <div
              className="fa-space"
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
            <div className="fa-space-left">
              <span
                onClick={(e) => {
                  props.openModal("login");
                }}
              >
                <img
                  className="button_down_img"
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRW1rDGVkSMqoU63QZPgSnSE7s-eSSkTJsnQA&usqp=CAU"
                  alt=""
                />
                <p className="green">Log In</p>
              </span>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default NavBar;
