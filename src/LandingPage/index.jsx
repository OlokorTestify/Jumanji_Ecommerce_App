import React from "react";
import SideBar from "./components/sidebar/sideBar";
import Landing from "../containers/Landing";

const landingPage = () => {
  return (
    <>
      <div className="main_section_top">
        <SideBar />
        <Landing />
      </div>
    </>
  );
};

export default landingPage;
