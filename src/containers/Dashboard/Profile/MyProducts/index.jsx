import React from "react";
import history from "../../../../utils/history";
import "./index.css";

const Adverts = () => {
  const handleClick = () => {
    history.push("/add_product");
  };
  return (
    <>
      <section className="adverts_item">
        <div className="item-header">
          <h3>My Adverts</h3>
        </div>
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
      </section>
    </>
  );
};

export default Adverts;
