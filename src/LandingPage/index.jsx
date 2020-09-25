import React from "react";
import SideBar from "./components/sidebar/sideBar";
import Landing from "../containers/Landing";

const landingPage = () => {
  return (
    <>
      <div
        style={{ display: "flex", flexDirection: "row", marginTop: "5.37rem" }}
      >
        <SideBar />
        <Landing />
      </div>
    </>
  );
};

export default landingPage;
