import React, { useState, useEffect } from "react";
import * as Yup from "yup";
import { toast } from "react-toastify";
import ReactLoading from "react-loading";
import axios from "axios";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getProduct } from "../../../../store/actions";

import "./style.css";
import { updateProduct } from "../../../../store/actions";

const EditProduct = (props) => {
  const dispatch = useDispatch();
  const params = useParams();
  const [loading, setLoading] = useState(false);
  const [updateLoading, setUpdateLoading] = useState(false);
  const [uploading, setUploading] = useState(false);
  const [image, setImage] = useState(null);
  const { product } = useSelector((state) => state.product);

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
      formData.append("product_image", image);
      const res = await axios.put(
        `${process.env.REACT_APP_SERVER_BASE_URL}/products/${params.id}/image`,
        formData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            Accept: "multipart/form-data",
          },
        },
      );
      await dispatch({
        type: "UPDATE_PRODUCT_SUCCESS",
        product: res.data.data.product,
      });
      toast.success("IMAGE UPLOAD SUCCESSFUL");
    } catch (error) {
      toast.error(error.response.data.message);
    }
    setUploading(false);
  };

  useEffect(() => {
    const getOneProduct = async () => {
      try {
        setLoading(true);
        await dispatch(getProduct(params.id));
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
    getOneProduct();
  }, [dispatch, params.id]);

  const handleSubmit = async (values, { setSubmitting }) => {
    try {
      setUpdateLoading(true);
      await dispatch(updateProduct(params.id, values));
      toast.success("PRODUCT UPDATED SUCCESSFULLY");
      setUpdateLoading(false);
    } catch (error) {
      if (error.message) {
        setUpdateLoading(false);
        toast.error(error.message);
        return;
      }
      toast.error(error);
      setUpdateLoading(false);
    }
  };

  const EditProductSchema = Yup.object().shape({
    category: Yup.string().required().required("Please pick a category"),
    name: Yup.string().required("name required"),
    description: Yup.string().required("Description required"),
    price: Yup.string()
      .required("Price required")
      .matches(/^\d+$/, "Price not valid"),
    contact: Yup.string()
      .required("Please input your Phone number")
      .matches(/^\d+$/, "phone number not valid")
      .min(11),
  });

  return (
    <>
      {loading && (
        <ReactLoading type={"spokes"} color="green" height={30} width={30} />
      )}
      {!loading && product && (
        <section className="Edit">
          <div className="form">
            <Formik
              initialValues={{
                name: `${product.name}`,
                description: `${product.description}`,
                price: `${product.price}`,
                contact: `${product.contact}`,
                category: `${product.category}`,
              }}
              onSubmit={handleSubmit}
              validationSchema={EditProductSchema}
            >
              {({ isSubmitting }) => (
                <>
                  <section className="Edit_form">
                    <h1>UPDATE YOUR PRODUCT</h1>
                    <Form>
                      <div>
                        <Field
                          as="select"
                          placeholder="Category"
                          name="category"
                          className="input-field"
                        >
                          <option value="vehicles">Vehicles</option>
                          <option value="clothing">Fashion</option>
                          <option value="tech">Tech</option>
                        </Field>
                      </div>
                      <ErrorMessage
                        name="category"
                        component="div"
                        className="error_message"
                      />
                      <div>
                        <Field
                          className="input-field"
                          type="text"
                          name="name"
                          placeholder="name"
                        />
                      </div>
                      <ErrorMessage
                        name="name"
                        component="div"
                        className="error_message"
                      />
                      <div>
                        <Field
                          className="input-field"
                          type="text"
                          name="price"
                          placeholder="price"
                        />
                      </div>
                      <ErrorMessage
                        name="price"
                        component="div"
                        className="error_message"
                      />
                      <div>
                        <Field
                          className="input-field"
                          type="text"
                          name="contact"
                          placeholder="Phone Number (digits only)"
                        />
                      </div>
                      <ErrorMessage
                        name="contact"
                        component="div"
                        className="error_message"
                      />
                      <div>
                        <Field
                          className="input-field-description"
                          type="text"
                          name="description"
                          component="textarea"
                          rows="10"
                          placeholder="description"
                        />
                      </div>
                      <ErrorMessage
                        name="description"
                        component="div"
                        className="error_message"
                      />
                      <div>
                        <button
                          className="form-button"
                          type="submit"
                          disabled={isSubmitting}
                        >
                          {updateLoading ? (
                            <ReactLoading
                              type={"spokes"}
                              color="green"
                              height={30}
                              width={30}
                            />
                          ) : (
                            "UPDATE PRODUCT"
                          )}
                        </button>
                      </div>
                    </Form>
                  </section>
                </>
              )}
            </Formik>
          </div>

          <div className="Edit-image">
            <img src={product.image_url} alt="" />
            <div className="change_product_image">
              <input
                type="file"
                className="file"
                onChange={fileChangedHandler}
                required
              />
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
        </section>
      )}
    </>
  );
};

export default EditProduct;
