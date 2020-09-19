import React from "react";
import "./style.css";

const Signup = (props) => {
  return (
    <>
      <div className="button_sign">
        <div className="button_margin1">
          <button className="button_google">Sign up Via Google</button>
        </div>
        <div className="button_margins">
          <button className="button_facebook">Sign up Via Facebook</button>
        </div>
        <div>
          <p>OR</p>
        </div>
        <div className="button_margin3">
          <button
            className="button_email"
            onClick={() => props.setModalState("form_signup")}
          >
            Sign up Via Email or Phone
          </button>
        </div>
        <p>
          Already have an account?{" "}
          <span className="green" onClick={() => props.setModalState("login")}>
            Log in
          </span>
        </p>
      </div>
    </>
  );
};

export default Signup;
