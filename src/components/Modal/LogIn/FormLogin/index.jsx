import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
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
    email: Yup.string().email("Invalid email").required("Required"),
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
                <ErrorMessage name="email" component="div" />
                <div>
                  <Field
                    className="input-field"
                    type="email"
                    name="email"
                    placeholder="email"
                  />
                </div>
                <div>
                  <Field
                    className="input-field"
                    type="password"
                    name="password"
                    placeholder="password"
                  />
                </div>
                <ErrorMessage name="password" component="div" />
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
                  <button
                    className="forms-button"
                    type="submit"
                    disabled={isSubmitting}
                  >
                    GOOGLE
                  </button>
                  <button
                    className="login"
                    type="submit"
                    disabled={isSubmitting}
                  >
                    FACEBOOK
                  </button>
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
