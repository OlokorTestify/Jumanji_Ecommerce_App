import React, { useState } from "react";
import * as Yup from "yup";
import { Formik, Form, Field, ErrorMessage } from "formik";
import "./style.css";

const AddProduct = (props) => {
  const [loading, setLoading] = useState(false);

  const handleSubmit = (values, { setSubmitting }) => {
    alert(values);
    setSubmitting(false);
  };

  const signInSchema = Yup.object().shape({
    category: Yup.string().required().required("Please pick a category"),
    title: Yup.string().required("Title required"),
    description: Yup.string().required("Description required"),
    price: Yup.string()
      .required("Price required")
      .matches(/^\d+$/, "Price not valid"),
    phone: Yup.string()
      .required("Please input your Phone number")
      .matches(/^\d+$/, "phone number not valid")
      .min(11),
  });

  return (
    <>
      <Formik
        initialValues={{
          title: "",
          description: "",
          price: "",
          phone: "",
          category: "",
        }}
        onSubmit={handleSubmit}
        validationSchema={signInSchema}
      >
        {({ isSubmitting }) => (
          <>
            <section className="Product_form">
              <h1>Post Your Product</h1>
              <Form>
                <div>
                  <Field
                    as="select"
                    placeholder="Category"
                    name="category"
                    className="input-field"
                  >
                    <option value="">Category</option>
                    <option value="Vehicles">Vehicles</option>
                    <option value="Fashion">Fashion</option>
                    <option value="Properties">Properties</option>
                    <option value="Fashion">Mobile Phones</option>
                    <option value="Vehicles">Electronics</option>
                    <option value="Fashion">Home Furniture</option>
                    <option value="Vehicles">Appliances</option>
                    <option value="Fashion">Food</option>
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
                    name="title"
                    placeholder="Title"
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
                    name="phone"
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
                    POST PRODUCT
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
