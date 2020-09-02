import React from "react";
import "./style.css";

const data = [
  {
    img: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/245657/2.jpg",
    price: "50",
    name: "Product",
    description: "its a great car",
    location: "Lekki phase 1",
  },
  {
    img: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/245657/2.jpg",
    price: "50",
    name: "Product",
    description: "its a great car",
    location: "Lekki phase 1",
  },
  {
    img: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/245657/2.jpg",
    price: "50",
    name: "Product",
    description: "its a great car",
    location: "Lekki phase 1",
  },
  {
    img: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/245657/2.jpg",
    price: "50",
    name: "Product",
    description: "its a great car",
    location: "Lekki phase 1",
  },
  {
    img: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/245657/2.jpg",
    price: "50",
    name: "Product",
    description: "its a great car",
    location: "Lekki phase 1",
  },
  {
    img: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/245657/2.jpg",
    price: "50",
    name: "Product",
    description: "its a great car",
    location: "Lekki phase 1",
  },
  {
    img: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/245657/2.jpg",
    price: "50",
    name: "Product",
    description: "its a great car",
    location: "Lekki phase 1",
  },
  {
    img: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/245657/2.jpg",
    price: "50",
    name: "Product",
    description: "its a great car",
    location: "Lekki phase 1",
  },
  {
    img: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/245657/2.jpg",
    price: "50",
    name: "Product",
    description: "its a great car",
    location: "Lekki phase 1",
  },
  {
    img: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/245657/2.jpg",
    price: "50",
    name: "Product",
    description: "its a great car",
    location: "Lekki phase 1",
  },
  {
    img: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/245657/2.jpg",
    price: "50",
    name: "Product",
    description: "its a great car",
    location: "Lekki phase 1",
  },
  {
    img: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/245657/2.jpg",
    price: "50",
    name: "Product",
    description: "its a great car",
    location: "Lekki phase 1",
  },
  {
    img: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/245657/2.jpg",
    price: "50",
    name: "Product",
    description: "its a great car",
    location: "Lekki phase 1",
  },
  {
    img: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/245657/2.jpg",
    price: "50",
    name: "Product",
    description: "its a great car",
    location: "Lekki phase 1",
  },
  {
    img: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/245657/2.jpg",
    price: "50",
    name: "Product",
    description: "its a great car",
    location: "Lekki phase 1",
  },
  {
    img: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/245657/2.jpg",
    price: "50",
    name: "Product",
    description: "its a great car",
    location: "Lekki phase 1",
  },
];

const Secondary = () => {
  return (
    <section className="secondary">
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
                  <div class="shadow"></div>
                  <img src={item.img} alt="" />
                  <div class="image_overlay"></div>
                  <div class="add_to_cart">Add to cart</div>
                  <div class="view_gallery">View gallery</div>
                  <div className="stats">
                    <div className="stats-container">
                      <span class="product_price">${item.price}</span>
                      <span class="product_name">{item.name}</span>
                      <p>Summer dress</p>
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

export default Secondary;
