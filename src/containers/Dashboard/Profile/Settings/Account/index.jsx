import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import ReactLoading from "react-loading";
import Fade from "react-reveal/Fade";
import { toast } from "react-toastify";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import axios from "axios";

import { updateUser } from "../../../../../store/actions";

import "./style.css";

const Account = () => {
  const [loading, setLoading] = useState(false);
  const [uploading, setUploading] = useState(false);
  const [image, setImage] = useState(null);
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);

  const fileChangedHandler = (event) => {
    const file = event.target.files[0];
    setImage(file);
  };

  const uploadHandler = async () => {
    const token = localStorage.getItem("access_token");
    try {
      if (!image) {
        alert("Please choose an image to upload");
        return;
      }
      setUploading(true);
      const formData = new FormData();
      formData.append("profile_image", image);
      const res = await axios.put(
        `${process.env.REACT_APP_SERVER_BASE_URL}/auth/user/image`,
        formData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            Accept: "multipart/form-data",
          },
        },
      );
      await dispatch({
        type: "UPDATE_USER_SUCCESS",
        user: res.data.data.user,
      });
      toast.success("UPDATE SUCCESSFUL");
    } catch (error) {
      toast.error(error.response.data.message);
    }
    setUploading(false);
  };

  const handleSubmit = async (values, { setSubmitting }) => {
    try {
      setLoading(true);
      await dispatch(updateUser(values));
      setLoading(false);
      toast.success("UPDATE SUCCESSFUL");
      setSubmitting(false);
    } catch (error) {
      if (error.message) {
        toast.error(error.message);
        setLoading(false);
        return;
      }
      toast.error(error);
      setLoading(false);
      setSubmitting(false);
    }
  };

  const updateSchema = Yup.object().shape({
    first_name: Yup.string().required("First Name Required"),
    last_name: Yup.string().required("Last Name Required"),
  });

  return (
    <>
      <Formik
        initialValues={{
          first_name: user.first_name,
          last_name: user.last_name,
        }}
        onSubmit={handleSubmit}
        validationSchema={updateSchema}
      >
        {({ isSubmitting }) => (
          <section className="userPreference">
            <div className="main-edit">
              <h3>PERSONALIZE</h3>
              <div className="userEdit">
                <div>
                  <p>Change Profile Picture</p>
                </div>
                <div className="imgprop">
                  <img src={user.profile_image} alt="" />
                  <div className="change_profile_image">
                    <input type="file" onChange={fileChangedHandler} required />
                    <button onClick={uploadHandler} className="upload-btn">
                      {uploading ? (
                        <ReactLoading
                          type={"spokes"}
                          color="green"
                          height={30}
                          width={30}
                        />
                      ) : (
                        "UPLOAD IMAGE"
                      )}
                    </button>
                  </div>
                </div>
              </div>
              <Form>
                <div>
                  <div className="userForm">
                    <div>
                      <h3>Full Name</h3>
                      <p>Customize your account name</p>
                    </div>
                    <div className="form">
                      <div className="input_con">
                        <Fade bottom>
                          <Field
                            type="text"
                            name="first_name"
                            placeholder="First Name"
                          />
                        </Fade>
                        <ErrorMessage
                          name="first_name"
                          component="div"
                          className="error_message"
                        />
                      </div>
                      <div className="input_con">
                        <Fade bottom>
                          <Field
                            type="text"
                            name="last_name"
                            placeholder="Last Name"
                          />
                        </Fade>
                        <ErrorMessage
                          name="last_name"
                          component="div"
                          className="error_message"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="password_btn">
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
                        "SAVE"
                      )}
                    </button>
                  </Fade>
                </div>
              </Form>
            </div>
          </section>
        )}
      </Formik>
    </>
  );
};

export default Account;
