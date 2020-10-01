import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import ReactLoading from "react-loading";
import history from "../../../utils/history";
import { delProduct, getAllUserProducts } from "../../../store/actions";
import "./style.css";

const UserProducts = ({ products }) => {
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();

  return (
    <>
      <div className="products">
        <section className="main_product_header product">
          <p className="main_product">#ID</p>
          <p>NAME</p>
          <p>CATEGORY</p>
          <p>PRICE (NGN)</p>
        </section>
        {products.map((product, index) => {
          return (
            <>
              <section
                className="product main_product_content"
                key={product.id}
                onClick={() => {
                  history.push(`/profile/products/${product.id}/edit`);
                }}
              >
                <section className="mobile">
                  <div>
                    <p className="main_product_identifier">
                      <img
                        src="https://www.iconfinder.com/data/icons/social-messaging-ui-coloricon-1/21/52-512.png"
                        alt=""
                        onClick={async (e) => {
                          e.stopPropagation();

                          try {
                            toast.error(null);
                            setLoading(true);
                            await dispatch(delProduct(product.id));
                            await dispatch(getAllUserProducts());
                            setLoading(false);
                            toast.success("PRODUCT DELETED SUCCESSFULLY");
                          } catch (error) {
                            if (error.message) {
                              toast.error(error.message);
                              setLoading(false);
                              return;
                            }
                            toast.error(error);
                            setLoading(false);
                          }
                        }}
                      />
                      <p className="productId">
                        #{product.id.substring(0, 4)}..
                      </p>
                    </p>
                    <p>
                      NAME: <span>{product.name}</span>
                    </p>
                    <p>
                      CATEGORY: <span>{product.category}</span>
                    </p>
                    <p>
                      PRICE:{" "}
                      <span>
                        {product.price.replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                      </span>
                    </p>
                  </div>

                  <div className="delete">
                    <button
                      onClick={async (e) => {
                        e.stopPropagation();

                        try {
                          toast.error(null);
                          setLoading(true);
                          await dispatch(delProduct(product.id));
                          await dispatch(getAllUserProducts());
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
                      }}
                    >
                      {loading ? (
                        <ReactLoading
                          type={"spokes"}
                          color="green"
                          height={30}
                          width={30}
                        />
                      ) : (
                        "DELETE"
                      )}
                    </button>
                  </div>
                </section>

                <div className="mobile-hidden">
                  <p className="main_product_identifier">
                    <p className="productId">#{product.id.substring(0, 4)}..</p>
                  </p>
                  <p>{product.name}</p>
                  <p>{product.category}</p>
                  <p>{product.price.replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</p>
                </div>
              </section>
            </>
          );
        })}
      </div>
    </>
  );
};

export default UserProducts;
