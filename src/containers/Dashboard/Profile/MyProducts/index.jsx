import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import ReactLoading from "react-loading";
import { toast } from "react-toastify";
import history from "../../../../utils/history";
import UserProducts from "../../product";
import { getAllUserProducts } from "../../../../store/actions";
import "./index.css";

const Products = () => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const { userProducts } = useSelector((state) => state.product);

  useEffect(() => {
    const getUserProducts = async () => {
      try {
        setLoading(true);
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
    };
    getUserProducts();
  }, [dispatch]);

  const handleClick = () => {
    history.push("/add_product");
  };
  return (
    <>
      {loading && (
        <ReactLoading type={"spokes"} color="green" height={30} width={30} />
      )}

      {!loading && userProducts && (
        <section className="adverts_item">
          <div className="item-header">
            <h3>My Products</h3>
          </div>
          {userProducts.length > 0 ? (
            <UserProducts products={userProducts} />
          ) : (
            <div className="advert-container">
              <div className="advert">
                <img
                  className="no-advert"
                  src="https://static.jiji.ng/static/img/profile-redesign/adverts/no-adverts-images/no-adverts-active.svg"
                  alt=""
                />
              </div>
              <div className="advert-text">
                <p>There are no products yet.</p>
                <button onClick={handleClick} className="create_button">
                  Create new product now!
                </button>
              </div>
            </div>
          )}
        </section>
      )}
    </>
  );
};

export default Products;
