import React from "react";
import GoogleButton from "../../GoogleButton";
import "./styles.css";

const Login = (props) => {
  return (
    <>
      <div className="button_sign">
        <div className="button_margin1">
          <GoogleButton mode={"Log In"} />
        </div>
        <div>
          <p>OR</p>
        </div>
        <div className="button_margin3">
          <button
            className="button_email"
            onClick={() => props.setModalState("form_login")}
          >
            Log In Via Email or Phone
          </button>
        </div>
        <p>
          Don't have an account?{" "}
          <span onClick={() => props.setModalState("signup")} className="green">
            Sign Up
          </span>
        </p>
      </div>
    </>
  );
};

export default Login;
