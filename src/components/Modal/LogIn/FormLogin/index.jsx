import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import Fade from "react-reveal/Fade";
import { toast } from "react-toastify";
import ReactLoading from "react-loading";
import { useDispatch } from "react-redux";
import * as Yup from "yup";
import GoogleButton from "../../../GoogleButton";
import { userLogin } from "../../../../store/actions";
import "./style.css";

const FormLogin = (props) => {
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();

  const handleSubmit = async ({ email, password }, { setSubmitting }) => {
    try {
      setLoading(true);
      await dispatch(userLogin({ email, password }));
      toast.success("LOGIN SUCCESSFUL");
      props.onClose();
      setSubmitting(false);
      setLoading(false);
    } catch (error) {
      if (error.message) {
        toast.error(error.message);
        setLoading(false);
        return;
      }
      toast.error(error);
      setLoading(false);
    }
  };

  const signInSchema = Yup.object().shape({
    email: Yup.string().email("Invalid email").required("Email required"),
    password: Yup.string().required("Please enter your password"),
  });

  return (
    <>
      <Formik
        initialValues={{ email: "", password: "" }}
        onSubmit={handleSubmit}
        validationSchema={signInSchema}
      >
        {({ isSubmitting }) => (
          <>
            <section className="login_form-card">
              <Form>
                <div>
                  <Fade bottom>
                    <Field type="email" name="email" placeholder="email" />
                  </Fade>
                </div>
                <ErrorMessage
                  name="email"
                  component="div"
                  className="error_message"
                />
                <div>
                  <Fade bottom>
                    <Field
                      type="password"
                      name="password"
                      placeholder="password"
                    />
                  </Fade>
                </div>
                <ErrorMessage
                  name="password"
                  component="div"
                  className="error_message"
                />
                <Fade bottom>
                  <p className="forgot-password">Forgot your password?</p>
                </Fade>
                <div>
                  <Fade bottom>
                    <button
                      className="form-button"
                      type="submit"
                      disabled={isSubmitting}
                    >
                      {loading ? (
                        <ReactLoading
                          type={"spokes"}
                          color="green"
                          height={30}
                          width={30}
                        />
                      ) : (
                        "LOG IN"
                      )}
                    </button>
                  </Fade>
                </div>
                <p className="fa-register">
                  Don't have an account?
                  <span
                    onClick={() => props.setModalState("signup")}
                    className="Registration"
                  >
                    {" "}
                    Sign Up
                  </span>
                </p>
                <p className="paragraph">or</p>
                <section className="button-div">
                  <GoogleButton mode={"Log In"} />
                </section>
              </Form>
            </section>
          </>
        )}
      </Formik>
    </>
  );
};

export default FormLogin;
