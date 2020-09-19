import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import "./style.css";

const FormSignUp = (props) => {
  const [loading, setLoading] = useState(false);

  const handleSubmit = ({ email, password }, { setSubmitting }) => {
    props.setIsLoggedIn(true);
    props.onClose();
    setSubmitting(false);
  };

  const signInSchema = Yup.object().shape({
    email: Yup.string().email("Invalid email").required("Required"),
    password: Yup.string().required("Please enter your password"),
    Firstname: Yup.string().required("Please enter your first name"),
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
            <section className="login_form">
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
                <ErrorMessage name="password" component="div" />
                <div>
                  <Field
                    className="input-field"
                    type="password"
                    name="password"
                    placeholder="password"
                  />
                </div>
                <ErrorMessage name="Firstname" component="div" />
                <div>
                  <Field
                    className="input-field"
                    type="text"
                    name="Firstname"
                    placeholder="First name"
                  />
                </div>
                <ErrorMessage name="Last-name" component="div" />
                <div>
                  <Field
                    className="input-field"
                    type="text"
                    name="lastName"
                    placeholder="Last Name (optional)"
                  />
                </div>
                <ErrorMessage name="phone-number" component="div" />
                <div>
                  <Field
                    className="input-field"
                    type="tel"
                    name="number"
                    placeholder="Phone Number (digits only)"
                  />
                </div>
                <div className="rules">
                  <Field type="checkbox" name="rules" />
                  <label for="rules" className="">
                    I agree with rules{" "}
                  </label>
                </div>
                <div>
                  <button
                    className="form-button"
                    type="submit"
                    disabled={isSubmitting}
                  >
                    Sign Up
                  </button>
                </div>
                <p className="fa-register">
                  Already have an account?
                  <span
                    className="Registration"
                    onClick={() => props.setModalState("login")}
                  >
                    {" "}
                    Log In
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

export default FormSignUp;
