import React from "react";
import { Link } from "react-router-dom";

const IsLoggedIn = (props) => {
  return (
    <>
      <div>
        <Link className="link-style">Favorites</Link>
      </div>
      <div>
        <p className="link-style">Messages</p>
      </div>
      <div>
        <Link className="link-style">Notifications</Link>
      </div>
      <div>
        <p className="link-style">My Adverts</p>
      </div>
      <div>
        <img
          className="profile"
          src="https://www.pngitem.com/pimgs/m/146-1468479_my-profile-icon-blank-profile-picture-circle-hd.png"
        />
      </div>
    </>
  );
};

export default IsLoggedIn;
