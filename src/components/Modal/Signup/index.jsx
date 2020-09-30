import React from "react";
import Fade from "react-reveal/Fade";
import GoogleButton from "../../GoogleButton";
import "./style.css";

const Signup = (props) => {
  return (
    <>
      <div className="button_sign">
        <Fade top>
          <div className="button_margin1">
            <GoogleButton onClose={props.onClose} mode={"SIGN UP"} />
          </div>
        </Fade>
        <div>
          <p>OR</p>
        </div>
        <Fade top>
          <div className="button_margin3">
            <button
              className="button_email"
              onClick={() => props.setModalState("form_signup")}
            >
              SIGN UP VIA EMAIL OR PHONE
            </button>
          </div>
        </Fade>
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
