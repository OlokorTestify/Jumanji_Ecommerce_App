import React from "react";
import "./style.css";

const SideBar = () => {
  return (
    <>
      <div className="sideBar">
        <h3>CATEGORIES</h3>
        <div className="checklist">
          <ul>
            <li className="vehicles_link">
              <a href="">
                <span></span>Vehicles
              </a>
            </li>
            <li>
              <a href="">
                <span></span>Properties
              </a>
            </li>
            <li>
              <a href="">
                <span></span>Mobile Phones
              </a>
            </li>
            <li>
              <a href="">
                <span></span>Electronics
              </a>
            </li>
            <li>
              <a href="">
                <span></span>Home Furniture
              </a>
            </li>
            <li>
              <a href="">
                <span></span>Appliances
              </a>
            </li>
            <li>
              <a href="">
                <span></span>Fashion
              </a>
            </li>
            <li>
              <a href="">
                <span></span>Food
              </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default SideBar;
