import React from "react";
import { Link } from "react-router-dom";
import Fade from "react-reveal/Fade";
import history from "../../../utils/history";
import "./style.css";

const SideBar = () => {
  return (
    <Fade left>
      <div className="sideBar">
        <h3>CATEGORIES</h3>
        <div className="checklist">
          <ul>
            <li className="vehicles_link">
              <Link to="">
                <span></span>Vehicles
              </Link>
            </li>
            <li>
              <Link to="">
                <span></span>Properties
              </Link>
            </li>
            <li>
              <Link to="">
                <span></span>Mobile Phones
              </Link>
            </li>
            <li>
              <Link to="">
                <span></span>Electronics
              </Link>
            </li>
            <li>
              <Link to="">
                <span></span>Home Furniture
              </Link>
            </li>
            <li>
              <Link to="">
                <span></span>Appliances
              </Link>
            </li>
            <li>
              <Link to="">
                <span></span>Fashion
              </Link>
            </li>
            <li>
              <Link to="">
                <span></span>Food
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </Fade>
  );
};

export default SideBar;
