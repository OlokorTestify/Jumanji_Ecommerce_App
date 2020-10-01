import React from "react";
import Fade from "react-reveal/Fade";
import "./style.css";

const SideBar = () => {
  return (
    <Fade left>
      <div className="sideBar">
        <h3>CATEGORIES</h3>
        <div className="checklist">
          <ul>
            <li className="vehicles_link">
              <p>
                <span></span>Vehicle
              </p>
            </li>
            <li>
              <p>
                <span></span>Tech
              </p>
            </li>
            <li>
              <p>
                <span></span>Fashion
              </p>
            </li>
            <li>
              <p>
                <span></span>Properties
              </p>
            </li>
          </ul>
        </div>
      </div>
    </Fade>
  );
};

export default SideBar;
