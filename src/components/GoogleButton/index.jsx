import React, { useState } from "react";
import { GoogleLogin } from "react-google-login";
import { useDispatch } from "react-redux";
import ReactLoading from "react-loading";
import { toast } from "react-toastify";
import { googleAuth } from "../../store/actions";

const GoogleButton = (props) => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);

  const responseGoogle = async (response) => {
    try {
      setLoading(true);
      await dispatch(googleAuth(response.tokenId));
      toast.success(`${props.mode} SUCCESSFUL`);
      props.onClose();
      setLoading(false);
    } catch (error) {
      if (error.message) {
        toast.error(error.message);
        setLoading(false);
        return;
      }
      setLoading(false);
      toast.error(error);
    }
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
            disabled={renderProps.disabled || loading}
          >
            <img
              className="google_image"
              src="https://cdn.worldvectorlogo.com/logos/google-icon.svg"
              alt="google"
            />
            {loading ? (
              <ReactLoading
                type={"spokes"}
                color="green"
                height={30}
                width={30}
              />
            ) : (
              `${props.mode} WITH GOOGLE`
            )}
          </button>
        )}
      ></GoogleLogin>
    </>
  );
};

export default GoogleButton;
