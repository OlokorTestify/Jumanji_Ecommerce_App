import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import GoogleButton from "../../../GoogleButton";
import * as Yup from "yup";
import "./style.css";

const FormLogin = (props) => {
  const [loading, setLoading] = useState(false);

  const handleSubmit = ({ email, password }, { setSubmitting }) => {
    props.setIsLoggedIn(true);
    props.onClose();
    setSubmitting(false);
  };

  const signInSchema = Yup.object().shape({
    email: Yup.string().email("Invalid email").required("Email required"),
    password: Yup.string().required("Please enter your password"),
  });

  return (
    <>
      <Formik
        initialValues={{ email: "test@gmail.com", password: "okaygoogke" }}
        onSubmit={handleSubmit}
        validationSchema={signInSchema}
      >
        {({ isSubmitting }) => (
          <>
            <section className="login_form-card">
              <Form>
                <div>
                  <Field type="email" name="email" placeholder="email" />
                </div>
                <ErrorMessage
                  name="email"
                  component="div"
                  className="error_message"
                />
                <div>
                  <Field
                    type="password"
                    name="password"
                    placeholder="password"
                  />
                </div>
                <ErrorMessage
                  name="password"
                  component="div"
                  className="error_message"
                />
                <p className="forgot-password">Forgot your password?</p>
                <div>
                  <button
                    className="form-button"
                    type="submit"
                    disabled={isSubmitting}
                  >
                    Sign In
                  </button>
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
      {loading ? <div>Loading...</div> : null}
    </>
  );
};

export default FormLogin;
