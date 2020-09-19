import React from "react";
const NotLoggedIn = (props) => {
  return (
    <>
      <div>
        <div className="link-style" onClick={() => props.openModal("signup")}>
          Sign Up
        </div>
      </div>
      <div>
        <p className="link-style" onClick={() => props.openModal("login")}>
          Log In
        </p>
      </div>
    </>
  );
};

export default NotLoggedIn;
