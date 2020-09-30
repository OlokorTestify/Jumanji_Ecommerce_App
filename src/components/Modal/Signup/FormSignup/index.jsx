import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { useDispatch } from "react-redux";
import ReactLoading from "react-loading";
import { toast } from "react-toastify";
import GoogleButton from "../../../GoogleButton";
import { userSignUp } from "../../../../store/actions";
import * as Yup from "yup";
import "./style.css";

const FormSignUp = (props) => {
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();

  const handleSubmit = async (
    { email, password, first_name, last_name },
    { setSubmitting },
  ) => {
    try {
      setLoading(true);
      await dispatch(userSignUp({ email, password, first_name, last_name }));
      toast.success("SIGNUP SUCCESSFUL");
      props.onClose();
      setSubmitting(false);
      setLoading(false);
    } catch (error) {
      if (error.message) {
        toast.error(error.message);
        return;
      }
      toast.error(error);
      setLoading(false);
    }
  };

  const signInSchema = Yup.object().shape({
    email: Yup.string().email("Invalid email").required("Required"),
    password: Yup.string().required("Please enter your password"),
    first_name: Yup.string().required("Please enter your first name"),
    last_name: Yup.string().required("Please enter your last name"),
  });

  return (
    <>
      <Formik
        initialValues={{
          email: "",
          password: "",
          first_name: "",
          last_name: "",
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
                    name="first_name"
                    placeholder="First name"
                  />
                </div>
                <ErrorMessage
                  name="first_name"
                  component="div"
                  className="error_message"
                />
                <div>
                  <Field
                    type="text"
                    name="last_name"
                    placeholder="Last Name (optional)"
                  />
                </div>
                <ErrorMessage
                  name="Last_name"
                  component="div"
                  className="error_message"
                />

                <div>
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
                      "SIGN UP"
                    )}
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
    </>
  );
};

export default FormSignUp;
