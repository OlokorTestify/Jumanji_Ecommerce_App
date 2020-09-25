import React, { useState } from "react";

import history from "../../utils/history";
import Favorites from "../../assets/image/star.png";
import NewFavorites from "../../assets/image/green-star.png";
import "./style.css";

const data = [
  {
    img:
      "https://www.extremetech.com/wp-content/uploads/2019/12/SONATA-hero-option1-764A5360-edit-640x354.jpg",
    price: "500,000",
    name: "Pleated Denim Skirts",
    category: "Fashion",
    id: 1,
  },
  {
    img:
      "https://csmobiles.com/18765-large_default/apple-iphone-11-128gb-rojo.jpg",
    price: "500,000",
    name: "Pleated Denim Skirts",
    category: "Fashion",
    id: 2,
  },
  {
    img:
      "https://csmobiles.com/18765-large_default/apple-iphone-11-128gb-rojo.jpg",
    price: "500,000",
    name: "Pleated Denim Skirts",
    category: "Fashion",
    id: 3,
  },
  {
    img:
      "https://csmobiles.com/18765-large_default/apple-iphone-11-128gb-rojo.jpg",
    price: "500,000",
    name: "Pleated Denim Skirts",
    category: "Fashion",
    id: 4,
  },
  {
    img:
      "https://csmobiles.com/18765-large_default/apple-iphone-11-128gb-rojo.jpg",
    price: "500,000",
    name: "Pleated Denim Skirts",
    category: "Fashion",
    id: 5,
  },
  {
    img:
      "https://csmobiles.com/18765-large_default/apple-iphone-11-128gb-rojo.jpg",
    price: "500,000",
    name: "Pleated Denim Skirts",
    category: "Fashion",
    id: 6,
  },
  {
    img:
      "https://csmobiles.com/18765-large_default/apple-iphone-11-128gb-rojo.jpg",
    price: "500,000",
    name: "Pleated Denim Skirts",
    category: "Fashion",
    id: 7,
  },
  {
    img:
      "https://csmobiles.com/18765-large_default/apple-iphone-11-128gb-rojo.jpg",
    price: "500,000",
    name: "Pleated Denim Skirts",
    category: "Fashion",
    id: 8,
  },
  {
    img:
      "https://csmobiles.com/18765-large_default/apple-iphone-11-128gb-rojo.jpg",
    price: "500,000",
    name: "Pleated Denim Skirts",
    category: "Fashion",
    id: 9,
  },
  {
    img:
      "https://csmobiles.com/18765-large_default/apple-iphone-11-128gb-rojo.jpg",
    price: "500,000",
    name: "Pleated Denim Skirts",
    category: "Fashion",
    id: 10,
  },
  {
    img:
      "https://csmobiles.com/18765-large_default/apple-iphone-11-128gb-rojo.jpg",
    price: "500,000",
    name: "Pleated Denim Skirts",
    id: 11,
  },
  {
    img:
      "https://csmobiles.com/18765-large_default/apple-iphone-11-128gb-rojo.jpg",
    price: "500,000",
    name: "Pleated Denim Skirts",
    category: "Fashion",
    id: 12,
  },
  {
    img:
      "https://csmobiles.com/18765-large_default/apple-iphone-11-128gb-rojo.jpg",
    price: "500,000",
    name: "Pleated Denim Skirts",
    category: "Fashion",
    id: 13,
  },
  {
    img:
      "https://csmobiles.com/18765-large_default/apple-iphone-11-128gb-rojo.jpg",
    price: "500,000",
    name: "Pleated Denim Skirts",
    category: "Fashion",
  },
  {
    img:
      "https://csmobiles.com/18765-large_default/apple-iphone-11-128gb-rojo.jpg",
    price: "500,000",
    name: "Pleated Denim Skirts",
    category: "Fashion",
    id: 14,
  },
  {
    img:
      "https://csmobiles.com/18765-large_default/apple-iphone-11-128gb-rojo.jpg",
    price: "500,000",
    name: "Pleated Denim Skirts",
    category: "Fashion",
    id: 15,
  },
];

const Landing = () => {
  const [clicked, setClicked] = useState(data.map((element) => false));
  const handleChange = (e, index) => {
    const newStatus = [...clicked];
    newStatus[index] = !clicked[index];
    setClicked(newStatus);
    e.stopPropagation();
  };

  const handleClick = () => {
    history.push("/item");
  };

  return (
    <section className="main">
      <div className="inputMain">
        <input className="input" type="text" placeholder="Search" />
        <button className="button">Search</button>
      </div>
      <section className="product_section">
        {data.map((item, index) => {
          return (
            <>
              <div className="make3D" onClick={handleClick}>
                <div className="product-front">
                  <div className="shadow">
                    <img src={item.img} alt="" />
                  </div>
                  <button
                    onClick={(e) => handleChange(e, index)}
                    className="button-image"
                  >
                    <img
                      src={clicked[index] ? NewFavorites : Favorites}
                      alt=""
                    ></img>
                  </button>
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

export default Landing;
