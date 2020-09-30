import React from "react";
import Fade from "react-reveal/Fade";
import GoogleButton from "../../GoogleButton";
import "./styles.css";

const Login = (props) => {
  return (
    <>
      <div className="button_sign">
        <Fade top>
          <div className="button_margin1">
            <GoogleButton onClose={props.onClose} mode={"LOG IN"} />
          </div>
        </Fade>
        <div>
          <p>OR</p>
        </div>
        <Fade top>
          <div className="button_margin3">
            <button
              className="button_email"
              onClick={() => props.setModalState("form_login")}
            >
              LOG IN VIA EMAIL OR PHONE
            </button>
          </div>
        </Fade>
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
