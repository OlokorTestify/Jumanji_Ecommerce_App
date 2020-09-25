import React, { useState } from "react";
import "./style.css";

const items = [
  {
    img:
      "https://www.extremetech.com/wp-content/uploads/2019/12/SONATA-hero-option1-764A5360-edit-640x354.jpg",
    price: "5,000,000",
    name: "Pleated Denim Skirts",
    category: "Fashion",
    id: 1,
    userName: "John Doe",
    datePosted: "21st june 2010",
    address: "Lagos Island, Lagos State, Nigeria",
    state: "Nigerian used",
    ad:
      "V4 engine with factory fitted AC, allow wheels, pure leather seat, reverse camera with complete papers",
    phone: 2349023229099,
    profileImg:
      "https://www.pngitem.com/pimgs/m/146-1468479_my-profile-icon-blank-profile-picture-circle-hd.png",
  },
];

const DashboardLanding = () => {
  const [messageState, setMessageState] = useState(false);
  const [contact, setContact] = useState("Show contact");
  const [number, setNumber] = useState("Show Contact");

  const handleChange = (e) => {
    setMessageState(true);
  };
  const handleClick = (e) => {
    const sellerNumber = "2349099176247";
    setContact(sellerNumber);
    e.stopPropagation();
  };

  const onClick = (e) => {
    const myNumber = "2349099176247";
    setNumber(myNumber);
    e.stopPropagation();
  };
  return items.map((item) => {
    return (
      <>
        <div className="dashboard-flex">
          <div className="item">
            <div>
              <img src={item.img} alt="" />
            </div>
            <div className="stat_container">
              <div>
                <h2>{item.name}</h2>
              </div>
              <div className="statistics">
                <p className="date">{item.datePosted}</p>
                <p>{item.address}</p>
              </div>
              <div>
                <div>
                  <h2>Ad Description</h2>
                  <p>{item.ad}</p>
                </div>
                <button onClick={onClick} className="phoneButton">
                  {number}
                </button>
              </div>
            </div>
          </div>
          <div className="seller-profile">
            <div className="mainDiv">
              <div className="item_price">
                <p>NGN {item.price}</p>
              </div>
              <div className="flex-card">
                <div className="profileImg">
                  <img src={item.profileImg} alt="" />
                </div>
                <div className="userName">
                  <h3>{item.userName}</h3>
                </div>
                <div className="phone">
                  <button onClick={handleClick} className="itemPhone">
                    {contact}
                  </button>
                </div>
                <div className="phone">
                  {messageState ? (
                    <div>
                      <textarea
                        className="textArea"
                        placeholder="Enter message here..."
                        rows="4"
                        cols="50"
                        name="comment"
                        form="userform"
                      ></textarea>
                      <button className="submitMessage">Submit</button>
                    </div>
                  ) : (
                    <button onClick={handleChange} className="message">
                      Leave a message
                    </button>
                  )}
                </div>
              </div>
            </div>
            <div className="break"></div>
            <div className="boxShadow">
              <div className="safetyTips">
                <h3>Safety Tips</h3>
                <ul>
                  <li>Do not pay in advance even for the delivery</li>
                  <li>Try to meet at a safe, public location</li>
                  <li>Check the item BEFORE you buy it</li>
                  <li>Pay only after collecting the item</li>
                </ul>
                <div>
                  <button className="button">Report Abuse</button>
                </div>
              </div>
            </div>
            <div className="break"></div>
            <div className="postAd">
              <button className="add">Post Ad Like This</button>
            </div>
          </div>
        </div>
      </>
    );
  });
};

export default DashboardLanding;
