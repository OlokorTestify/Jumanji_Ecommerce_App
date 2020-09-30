import React, { useState } from "react";
import { useDispatch } from "react-redux";
import * as Yup from "yup";
import { toast } from "react-toastify";
import ReactLoading from "react-loading";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { createProduct } from "../../../../store/actions";
import history from "../../../../utils/history";
import "./style.css";

const AddProduct = () => {
  const [loading, setLoading] = useState(false);

  const dispatch = useDispatch();

  const handleSubmit = async (values, { setSubmitting }) => {
    try {
      setLoading(true);
      const product = await dispatch(createProduct(values));
      setLoading(false);
      setSubmitting(false);
      toast.success("PRODUCT CREATED SUCCESSFULLY");
      history.push(`/product/image_upload/${product.id}`);
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

  const AddProductSchema = Yup.object().shape({
    category: Yup.string().required().required("Please pick a category"),
    name: Yup.string().required("Title required"),
    description: Yup.string().required("Description required"),
    price: Yup.string()
      .required("Price required")
      .matches(/^\d+$/, "Price not valid")
      .max(6),
    contact: Yup.string()
      .required("Please input your Phone number")
      .matches(/^\d+$/, "phone number not valid")
      .min(11),
  });

  return (
    <>
      <Formik
        initialValues={{
          name: "",
          description: "",
          price: "",
          contact: "",
          category: "",
        }}
        onSubmit={handleSubmit}
        validationSchema={AddProductSchema}
      >
        {({ isSubmitting }) => (
          <>
            <section className="Product_form">
              <h1>Create Your Product</h1>
              <Form>
                <div>
                  <Field
                    as="select"
                    placeholder="Category"
                    name="category"
                    className="input-field"
                  >
                    <option value="">Category</option>
                    <option value="vehicles">Vehicles</option>
                    <option value="clothing">Fashion</option>
                    <option value="tech">Tech</option>
                  </Field>
                </div>
                <ErrorMessage
                  name="category"
                  s
                  component="div"
                  className="error_message"
                />
                <div>
                  <Field
                    className="input-field"
                    type="text"
                    name="name"
                    placeholder="Name"
                  />
                </div>
                <ErrorMessage
                  name="title"
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
                  name="phone"
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
                    {loading ? (
                      <ReactLoading
                        type={"spokes"}
                        color="green"
                        height={30}
                        width={30}
                      />
                    ) : (
                      "CREATE PRODUCT"
                    )}
                  </button>
                </div>
              </Form>
            </section>
          </>
        )}
      </Formik>
      {loading ? <div>Loading...</div> : null}
    </>
  );
};

export default AddProduct;
