import React, { useState } from "react";
import { Router, useHistory, Link } from "react-router-dom";
import Favorites from "../../assets/image/star.png";
import NewFavorites from "../../assets/image/green-star.png";
import "./style.css";

const data = [
  {
    img:
      "https://cnet3.cbsistatic.com/img/fM3fRrULrgs8E4E_Blt0xp-brVg=/940x0/2020/03/16/b608d847-55d9-42ce-a26c-d95e5a6c1513/apple-iphone-11-logo-camera-0471.jpg",
    price: "5,000,000",
    name: "Pleated Denim Jean",
    description: "its a great car",
    location: "Lekki phase 1",
  },
  {
    img:
      "https://cnet3.cbsistatic.com/img/fM3fRrULrgs8E4E_Blt0xp-brVg=/940x0/2020/03/16/b608d847-55d9-42ce-a26c-d95e5a6c1513/apple-iphone-11-logo-camera-0471.jpg",
    price: "5,000,000",
    name: "Pleated Denim Jean",
    description: "its a great car",
    location: "Lekki phase 1",
  },
  {
    img:
      "https://cnet3.cbsistatic.com/img/fM3fRrULrgs8E4E_Blt0xp-brVg=/940x0/2020/03/16/b608d847-55d9-42ce-a26c-d95e5a6c1513/apple-iphone-11-logo-camera-0471.jpg",
    price: "5,000,000",
    name: "Pleated Denim Jean",
    description: "its a great car",
    location: "Lekki phase 1",
  },
  {
    img:
      "https://cnet3.cbsistatic.com/img/fM3fRrULrgs8E4E_Blt0xp-brVg=/940x0/2020/03/16/b608d847-55d9-42ce-a26c-d95e5a6c1513/apple-iphone-11-logo-camera-0471.jpg",
    price: "5,000,000",
    name: "Pleated Denim Jean",
    description: "its a great car",
    location: "Lekki phase 1",
  },
  {
    img:
      "https://cnet3.cbsistatic.com/img/fM3fRrULrgs8E4E_Blt0xp-brVg=/940x0/2020/03/16/b608d847-55d9-42ce-a26c-d95e5a6c1513/apple-iphone-11-logo-camera-0471.jpg",
    price: "5,000,000",
    name: "Pleated Denim Jean",
    description: "its a great car",
    location: "Lekki phase 1",
  },
  {
    img:
      "https://cnet3.cbsistatic.com/img/fM3fRrULrgs8E4E_Blt0xp-brVg=/940x0/2020/03/16/b608d847-55d9-42ce-a26c-d95e5a6c1513/apple-iphone-11-logo-camera-0471.jpg",
    price: "5,000,000",
    name: "Pleated Denim Jean",
    description: "its a great car",
    location: "Lekki phase 1",
  },
  {
    img:
      "https://cnet3.cbsistatic.com/img/fM3fRrULrgs8E4E_Blt0xp-brVg=/940x0/2020/03/16/b608d847-55d9-42ce-a26c-d95e5a6c1513/apple-iphone-11-logo-camera-0471.jpg",
    price: "5,000,000",
    name: "Pleated Denim Jean",
    description: "its a great car",
    location: "Lekki phase 1",
  },
  {
    img:
      "https://cnet3.cbsistatic.com/img/fM3fRrULrgs8E4E_Blt0xp-brVg=/940x0/2020/03/16/b608d847-55d9-42ce-a26c-d95e5a6c1513/apple-iphone-11-logo-camera-0471.jpg",
    price: "5,000,000",
    name: "Pleated Denim Jean",
    description: "its a great car",
    location: "Lekki phase 1",
  },
  {
    img:
      "https://cnet3.cbsistatic.com/img/fM3fRrULrgs8E4E_Blt0xp-brVg=/940x0/2020/03/16/b608d847-55d9-42ce-a26c-d95e5a6c1513/apple-iphone-11-logo-camera-0471.jpg",
    price: "5,000,000",
    name: "Pleated Denim Jean",
    description: "its a great car",
    location: "Lekki phase 1",
  },
  {
    img:
      "https://cnet3.cbsistatic.com/img/fM3fRrULrgs8E4E_Blt0xp-brVg=/940x0/2020/03/16/b608d847-55d9-42ce-a26c-d95e5a6c1513/apple-iphone-11-logo-camera-0471.jpg",
    price: "5,000,000",
    name: "Pleated Denim Jean",
    description: "its a great car",
    location: "Lekki phase 1",
  },
  {
    img:
      "https://cnet3.cbsistatic.com/img/fM3fRrULrgs8E4E_Blt0xp-brVg=/940x0/2020/03/16/b608d847-55d9-42ce-a26c-d95e5a6c1513/apple-iphone-11-logo-camera-0471.jpg",
    price: "5,000,000",
    name: "Pleated Denim Jean",
    description: "its a great car",
    location: "Lekki phase 1",
  },
  {
    img:
      "https://cnet3.cbsistatic.com/img/fM3fRrULrgs8E4E_Blt0xp-brVg=/940x0/2020/03/16/b608d847-55d9-42ce-a26c-d95e5a6c1513/apple-iphone-11-logo-camera-0471.jpg",
    price: "5,000,000",
    name: "Pleated Denim Jean",
    description: "its a great car",
    location: "Lekki phase 1",
  },
  {
    img:
      "https://cnet3.cbsistatic.com/img/fM3fRrULrgs8E4E_Blt0xp-brVg=/940x0/2020/03/16/b608d847-55d9-42ce-a26c-d95e5a6c1513/apple-iphone-11-logo-camera-0471.jpg",
    price: "5,000,000",
    name: "Pleated Denim Jean",
    description: "its a great car",
    location: "Lekki phase 1",
  },
  {
    img:
      "https://cnet3.cbsistatic.com/img/fM3fRrULrgs8E4E_Blt0xp-brVg=/940x0/2020/03/16/b608d847-55d9-42ce-a26c-d95e5a6c1513/apple-iphone-11-logo-camera-0471.jpg",
    price: "5,000,000",
    name: "Pleated Denim Jean",
    description: "its a great car",
    location: "Lekki phase 1",
  },
  {
    img:
      "https://cnet3.cbsistatic.com/img/fM3fRrULrgs8E4E_Blt0xp-brVg=/940x0/2020/03/16/b608d847-55d9-42ce-a26c-d95e5a6c1513/apple-iphone-11-logo-camera-0471.jpg",
    price: "5,000,000",
    name: "Pleated Denim Jean",
    description: "its a great car",
    location: "Lekki phase 1",
  },
];

const Secondary = () => {
  const [clicked, setClicked] = useState(data.map((element) => false));
  const handleChange = (e, index) => {
    const newStatus = [...clicked];
    newStatus[index] = !clicked[index];
    setClicked(newStatus);
    e.stopPropagation();
  };

  const history = useHistory();
  const handleClick = () => {
    history.push("/item");
  };
  return (
    <section className="secondary">
      <div className="inputMain">
        <input className="input" type="text" placeholder="Search" />
        <button className="button">Search</button>
      </div>
      <section className="product_section">
        {data.map((item, index) => {
          return (
            <>
              <Router history={history}>
                <div className="card" onClick={handleClick}>
                  <div className="product-front">
                    <div class="shadow">
                      <img src={item.img} alt="" />
                    </div>
                    <button
                      onClick={(e) => handleChange(e, index)}
                      className="Favorite"
                    >
                      <img
                        src={clicked[index] ? NewFavorites : Favorites}
                        alt=""
                      ></img>
                    </button>
                    <div class="card-stats">
                      <div className="stats">
                        <div className="stats-container">
                          <p class="product_name">{item.name}</p>
                          <span class="product_price">${item.price}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Router>
            </>
          );
        })}
      </section>
    </section>
  );
};

export default Secondary;
