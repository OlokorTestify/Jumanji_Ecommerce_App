import React from "react";
import axios from "axios";
import { GoogleLogin } from "react-google-login";

const GoogleButton = (props) => {
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
            <img
              className="google_image"
              src="https://cdn.worldvectorlogo.com/logos/google-icon.svg"
              alt="google"
            />
            {props.mode} with Google
          </button>
        )}
      ></GoogleLogin>
    </>
  );
};

export default GoogleButton;
