import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import GoogleButton from "../../../GoogleButton";
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
    Lastname: Yup.string().required("Please enter your last name"),
    number: Yup.string()
      .required("Please input your Phone number")
      .matches(/^\d+$/, "phone number not valid")
      .min(11),
  });

  return (
    <>
      <Formik
        initialValues={{
          email: "test@gmail.com",
          password: "okaygoogke",
          Firstname: "",
          Lastname: "",
          number: "",
        }}
        onSubmit={handleSubmit}
        validationSchema={signInSchema}
      >
        {({ isSubmitting }) => (
          <>
            <section className="login_form">
              <Form>
                <div>
                  <Field type="email" name="email" placeholder="email" />
                </div>

                <ErrorMessage name="email" component="div" />
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
                <div>
                  <Field
                    type="text"
                    name="Firstname"
                    placeholder="First name"
                  />
                </div>
                <ErrorMessage
                  name="Firstname"
                  component="div"
                  className="error_message"
                />
                <div>
                  <Field
                    type="text"
                    name="LastName"
                    placeholder="Last Name (optional)"
                  />
                </div>
                <ErrorMessage
                  name="Lastname"
                  component="div"
                  className="error_message"
                />
                <div>
                  <Field
                    type="tel"
                    name="number"
                    placeholder="Phone Number (digits only)"
                  />
                </div>
                <ErrorMessage
                  name="number"
                  component="div"
                  className="error_message"
                />
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
                  <GoogleButton mode={"Sign Up"} />
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
