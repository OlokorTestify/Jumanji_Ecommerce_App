import React, { useState } from "react";
import axios from "axios";
import { useSelector } from "react-redux";
import ReactLoading from "react-loading";
import { toast } from "react-toastify";
import Fade from "react-reveal/Fade";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

import "./style.css";

const Security = () => {
  const [loading, setLoading] = useState(false);

  const { user } = useSelector((state) => state.auth);

  const passwordSchema = Yup.object().shape({
    old_password: Yup.string().required("Old Password Required"),
    new_password: Yup.string().required("New Password Required"),
  });

  const handleSubmit = async (values, { setSubmitting }) => {
    try {
      const token = localStorage.getItem("access_token");
      setLoading(true);
      await axios.put(
        `${process.env.REACT_APP_SERVER_BASE_URL}/auth/user/password`,
        values,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      );
      toast.success("UPDATE SUCCESSFUL");
      setSubmitting(false);
      setLoading(false);
    } catch (error) {
      toast.error(error.response.data.message);
      setLoading(false);
    }
  };

  return (
    <>
      <section className="security_section">
        <div>
          <h1 className="emailHeader">Verified Information</h1>
          <p className="emailHeader">
            Your verified information helps us secure your account
          </p>
          <div className="email-card">
            <p>Email Address</p>
            <p className="email">{user.email}</p>
          </div>
        </div>
        <div className="password">
          <h1 className="emailHeader">Password</h1>
          <p className="emailHeader">Change your password to a new one.</p>
          <div>
            <Formik
              initialValues={{
                old_password: "",
                new_password: "",
              }}
              onSubmit={handleSubmit}
              validationSchema={passwordSchema}
            >
              {({ isSubmitting }) => (
                <Form>
                  <div className="setPassword">
                    <p>Old Password</p>
                    <div className="input">
                      <Fade bottom>
                        <Field
                          type="password"
                          name="old_password"
                          placeholder="Old Password"
                        />
                      </Fade>
                      <ErrorMessage
                        name="old_password"
                        component="div"
                        className="error_message"
                      />
                    </div>
                  </div>
                  <div className="setPassword">
                    <p>New Password</p>
                    <div className="input">
                      <Fade bottom>
                        <Field
                          type="password"
                          name="new_password"
                          placeholder="New Password"
                        />
                      </Fade>
                      <ErrorMessage
                        name="new_password"
                        component="div"
                        className="error_message"
                      />
                    </div>
                  </div>
                  <div className="password_btn">
                    <Fade bottom>
                      <button disabled={isSubmitting} className="form-button">
                        {loading ? (
                          <ReactLoading
                            type={"spokes"}
                            color="green"
                            height={30}
                            width={30}
                          />
                        ) : (
                          "CHANGE PASSWORD"
                        )}
                      </button>
                    </Fade>
                  </div>
                </Form>
              )}
            </Formik>
          </div>
        </div>
      </section>
    </>
  );
};

export default Security;
