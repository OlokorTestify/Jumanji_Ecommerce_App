import React from "react";
import "./styles.css";

const SignIn = () => {
  return (
    <>
      <div className="button_sign">
        <div className="button_margin1">
          <button className="button_google">Register Via Google</button>
        </div>
        <div className="button_margins">
          <button className="button_facebook">Register Via Facebook</button>
        </div>
        <div>
          <p>OR</p>
        </div>
        <div className="button_margin3">
          <button className="button_email">Register Via Email or Phone</button>
        </div>
      </div>
    </>
  );
};

export default SignIn;
