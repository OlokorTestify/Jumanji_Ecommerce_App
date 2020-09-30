import React from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { logOut } from "../../../store/actions";
import history from "../../../utils/history";

import "./style.css";

const IsLoggedIn = () => {
  const { user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const handleSubmit = () => {
    dispatch(logOut());
    history.push("/");
  };

  const handleCLick = () => {
    history.push("/profile/products");
  };

  return user ? (
    <>
      <div>
        <p className="link-style" onClick={handleCLick}>
          My Products
        </p>
      </div>
      <div className="dropdown">
        <img className="profile" src={user.profile_image} alt="" />
        <section className="dropdown_content">
          <div className="messages-box">
            <div className="fa-fa-adverts">
              <div className="message-image">
                <img
                  alt="message"
                  src="data:image/png;base64,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"
                />
              </div>
              <div className="messageText">
                <Link className="product_link" to="/profile/settings">
                  <p className="message-box">Profile</p>
                </Link>
              </div>
            </div>
          </div>

          <div className="Fa-signOut">
            <div className="product_link">
              <p type="submit" onClick={handleSubmit} className="message-box">
                Sign Out
              </p>
            </div>
          </div>
        </section>
      </div>
    </>
  ) : null;
};

export default IsLoggedIn;
