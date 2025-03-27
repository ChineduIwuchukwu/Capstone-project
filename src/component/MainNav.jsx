import React from "react";
import Button from "./button";
import Profile from "../images/Profile.jpeg";

const MainNav = () => {
  return (
    <div className="main-nav">
      <div className="header">
        <div className="welcome-text">
          <h2>Welcome back, Chinedu</h2>
          <p>Explore finance</p>
        </div>
        <div className="profile">
          <input type="text" placeholder="Search" className="search" />
          {/* <Button classname="search-icon" name="seacrch" />
          <Button classname="search-icon" name="seacrch" /> */}
          <div className="profile-img">
            <img src={Profile} alt="" />
          </div>
        </div>
      </div>
      <div className="content"></div>
    </div>
  );
};

export default MainNav;
