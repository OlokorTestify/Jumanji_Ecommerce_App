import React from "react";
import { GoogleLogin } from "react-google-login";
import axios from "axios";
import "./styles.css";

const Login = (props) => {
  const sendGoogleToken = async (tokenId) => {
    try {
      const res = await axios.post("http://localhost:7002/auth/google", {
        token: tokenId,
      });
      console.log(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  const responseGoogle = (response) => {
    console.log(response);
    sendGoogleToken(response.tokenId);
  };

  return (
    <>
      <div className="button_sign">
        <div className="button_margin1">
          <GoogleLogin
            clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}
            onSuccess={responseGoogle}
            onFailure={responseGoogle}
            cookiePolicy={"single_host_origin"}
            render={(renderProps) => (
              <button
                className="button_google"
                onClick={renderProps.onClick}
                disabled={renderProps.disabled}
              >
                Login With Google
              </button>
            )}
          ></GoogleLogin>
        </div>
        <div className="button_margins">
          <button className="button_facebook">Login Via Facebook</button>
        </div>
        <div>
          <p>OR</p>
        </div>
        <div className="button_margin3">
          <button
            className="button_email"
            onClick={() => props.setModalState("form_login")}
          >
            Login Via Email or Phone
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
