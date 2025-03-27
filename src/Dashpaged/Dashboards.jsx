import React from "react";
import Sidenav from "../component/sidenav";
import MainNav from "../component/MainNav";

const dashboard = () => {
  return (
    <div className="dash">
      <Sidenav />
      <MainNav />
    </div>
  );
};

export default dashboard;
