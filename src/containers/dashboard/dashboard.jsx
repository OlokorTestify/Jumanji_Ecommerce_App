import React from "react";
import "./style.css";

const data = [
  {
    img:
      "https://www.extremetech.com/wp-content/uploads/2019/12/SONATA-hero-option1-764A5360-edit-640x354.jpg",
    price: "500,000",
    name: "Pleated Denim Skirts",
    category: "Fashion",
  },
  {
    img: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/245657/2.jpg",
    price: "500,000",
    name: "Pleated Denim Skirts",
    category: "Fashion",
  },
  {
    img: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/245657/2.jpg",
    price: "500,000",
    name: "Pleated Denim Skirts",
    category: "Fashion",
  },
  {
    img: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/245657/2.jpg",
    price: "500,000",
    name: "Pleated Denim Skirts",
    category: "Fashion",
  },
  {
    img: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/245657/2.jpg",
    price: "500,000",
    name: "Pleated Denim Skirts",
    category: "Fashion",
  },
  {
    img: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/245657/2.jpg",
    price: "500,000",
    name: "Pleated Denim Skirts",
    category: "Fashion",
  },
  {
    img: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/245657/2.jpg",
    price: "500,000",
    name: "Pleated Denim Skirts",
    category: "Fashion",
  },
  {
    img: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/245657/2.jpg",
    price: "500,000",
    name: "Pleated Denim Skirts",
    category: "Fashion",
  },
  {
    img: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/245657/2.jpg",
    price: "500,000",
    name: "Pleated Denim Skirts",
    category: "Fashion",
  },
  {
    img: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/245657/2.jpg",
    price: "500,000",
    name: "Pleated Denim Skirts",
    category: "Fashion",
  },
  {
    img: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/245657/2.jpg",
    price: "500,000",
    name: "Pleated Denim Skirts",
  },
  {
    img: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/245657/2.jpg",
    price: "500,000",
    name: "Pleated Denim Skirts",
    category: "Fashion",
  },
  {
    img: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/245657/2.jpg",
    price: "500,000",
    name: "Pleated Denim Skirts",
    category: "Fashion",
  },
  {
    img: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/245657/2.jpg",
    price: "500,000",
    name: "Pleated Denim Skirts",
    category: "Fashion",
  },
  {
    img: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/245657/2.jpg",
    price: "500,000",
    name: "Pleated Denim Skirts",
    category: "Fashion",
  },
  {
    img: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/245657/2.jpg",
    price: "500,000",
    name: "Pleated Denim Skirts",
    category: "Fashion",
  },
];

const dashboard = () => {
  return (
    <section className="main">
      <div className="inputMain">
        <input className="input" type="text" placeholder="Search" />
        <button className="button">Search</button>
      </div>
      <section className="product_section">
        {data.map((item) => {
          return (
            <>
              <div className="make3D">
                <div className="product-front">
                  <div className="shadow">
                    <img src={item.img} alt="" />
                  </div>
                  <div className="image_overlay"></div>
                  <div className="stats">
                    <div className="stats-container">
                      <p className="product_name">{item.name}</p>
                      <p className="product_category">
                        Category: {item.category}
                      </p>
                      <p className="product_price">NGN {item.price}</p>
                    </div>
                  </div>
                </div>
              </div>
            </>
          );
        })}
      </section>
    </section>
  );
};

export default dashboard;
