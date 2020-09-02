import React from "react";
import SideBar from "./components/sidebar/sideBar";
import Dashboard from "../containers/dashboard/dashboard";

const landingPage = () => {
  return (
    <>
      <div
        style={{ display: "flex", flexDirection: "row", marginTop: "5.37rem" }}
      >
        <SideBar />
        <Dashboard />
      </div>
    </>
  );
};

export default landingPage;
