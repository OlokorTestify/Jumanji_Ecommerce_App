import React from "react";
import { Route, Switch, useRouteMatch, NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import Settings from "./Settings";
import MyProducts from "./MyProducts";
import EditProduct from "./EditProduct";
import "./style.css";

const LoggedIn = () => {
  const { user } = useSelector((state) => state.auth);
  const { path, url } = useRouteMatch();

  return user ? (
    <>
      <div className="dashboard-message">
        <div className="center">
          <div className="main_content">
            <Switch>
              <Route exact path={`${path}/products`} component={MyProducts} />
              <Route
                path={`${path}/products/:id/edit`}
                component={EditProduct}
              />
              <Route path={`${path}/settings`} component={Settings} />
            </Switch>
          </div>

          <div className="landing-sideBar">
            <div className="header">
              <div className="headerImg">
                <img className="profileImg" src={user.profile_image} alt="" />
              </div>
              <span className="userName">
                {user.first_name} {user.last_name}
              </span>
            </div>

            <div className="messages-box">
              <div className="fa-fa-message">
                <div className="message-image">
                  <img
                    src="https://cdn.iconscout.com/icon/premium/png-512-thumb/messages-1924164-1629238.png"
                    alt="message"
                  />
                </div>
                <div className="messageText">
                  <NavLink className="product_link" to={`${url}/products`}>
                    <p className="message-box">My Products</p>
                  </NavLink>
                </div>
              </div>
            </div>

            <NavLink className="product_link" to={`${url}/settings`}>
              <div className="messages-box">
                <div className="fa-fa-adverts">
                  <div className="message-image">
                    <img
                      src="https://www.iconfinder.com/data/icons/google-material-design-3-0/48/ic_settings_48px-512.png"
                      alt="message"
                    />
                  </div>
                  <div className="messageText">
                    <p className="message-box">Settings</p>
                  </div>
                </div>
              </div>
            </NavLink>
          </div>
        </div>
      </div>
    </>
  ) : null;
};

export default LoggedIn;
