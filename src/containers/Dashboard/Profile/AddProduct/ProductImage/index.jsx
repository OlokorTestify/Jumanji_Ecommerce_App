import React, { useState } from "react";
import { toast } from "react-toastify";
import { useParams } from "react-router-dom";
import ReactLoading from "react-loading";
import axios from "axios";
import history from "../../../../../utils/history";

const ProductImageUpload = () => {
  const [uploading, setUploading] = useState(false);
  const [image, setImage] = useState(null);
  const params = useParams();

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
      await axios.put(
        `${process.env.REACT_APP_SERVER_BASE_URL}/products/${params.id}/image`,
        formData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            Accept: "multipart/form-data",
          },
        },
      );
      toast.success("IMAGE UPLOAD SUCCESSFUL");
      history.push("/");
    } catch (error) {
      toast.error(error.response.data.message);
    }
    setUploading(false);
  };

  return (
    <>
      <section>
        <h1>SELECT AN IMAGE FOR YOUR PRODUCT</h1>
        <div>
          <img
            src="https://connectnigeria.com/articles/wp-content/uploads/2016/07/product-launch-2.jpg"
            alt=""
          />
          <div className="change_product_image">
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
      </section>
    </>
  );
};

export default ProductImageUpload;
