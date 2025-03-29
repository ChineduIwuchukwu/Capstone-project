import React from "react";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import Img1 from "../images/Img1.jpg";
import Button from "./button";
import Glovo from "../images/Glovo.png";
import Netflix from "../images/Netflix.png";
import Dstv from "../images/Dstv.png";
import Viva from "../images/Viva.png";
import AddOutlinedIcon from "@mui/icons-material/AddOutlined";
import Visa from "../images/Visa.png";
import KeyboardArrowRightOutlinedIcon from "@mui/icons-material/KeyboardArrowRightOutlined";

const MainNav = () => {
  const saving = [
    { label: "Vacation", amount: "$10,000", progress: "25%", styles: "" },
    { label: "House Payment", amount: "$127,000", progress: "65%" },
    { label: "Vacation", amount: "$10,000", progress: "25%" },
  ];
  return (
    <div className="main-nav">
      <div className="header">
        <div className="welcome-text">
          <h2>Welcome back, Chinedu</h2>
          <p>Explore finance</p>
        </div>

        <div className="profile">
          <div className="search">
            <SearchOutlinedIcon />
            <input type="text" placeholder="Search" className="search-bar" />
          </div>

          <div className="notification">
            <NotificationsNoneOutlinedIcon />
          </div>

          <div className="profile-img">
            <img src={Img1} alt="" />
          </div>
        </div>
      </div>
      <div className="content">
        <div className="graph-cards">
          <div className="graph">
            <h2>This will contain the graph</h2>
          </div>

          <div className="cards">
            <div className="saving-goals">
              <h5>Saving goals</h5>
              <div className="saving-goals-icon">
                <AddOutlinedIcon className="icon" />
              </div>
            </div>
            {saving.map(({ label, amount, progress }, index) => (
              <div key={index} className="Vacation">
                <div className="v-head">
                  <span>
                    <div className="label-box"></div>
                    <h6>{label}</h6>
                  </span>
                  <h6>{amount}</h6>
                </div>

                <div className="vacation-slider">
                  <div className="slider">
                    <div></div>
                  </div>
                  <p>{progress}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="transactions-cards">
          <div className="transactions">
            <div className="tf-header">
              <h3>Recent Transactions</h3>
              <p className="see-all">See all</p>
            </div>

            <div className="first-transaction">
              <div className="tf">
                <div className="tf-img">
                  <img src={Glovo} alt="" />
                </div>
                <div className="tf-text">
                  <h4>Deliveries</h4>
                  <p>Debit card</p>
                </div>
              </div>
              <div className="Date">
                <h3>Mar, 20 2025</h3>
                <p>10:20 am</p>
              </div>
              <div className="price">
                <h3>$4901.87</h3>
              </div>
              <Button className="completed" name="Completed" />
            </div>

            <div className="first-transaction">
              <div className="tf">
                <div className="tf-img">
                  <img src={Dstv} alt="" />
                </div>
                <div className="tf-text">
                  <h4>Cable</h4>
                  <p>Credit card</p>
                </div>
              </div>
              <div className="Date">
                <h3>Mar, 20 2025</h3>
                <p>03:02 pm</p>
              </div>
              <div className="price">
                <h3>$4901.87</h3>
              </div>
              <Button className="failed" name="Decined" />
            </div>
            <div className="first-transaction">
              <div className="tf">
                <div className="tf-img">
                  <img src={Netflix} alt="" />
                </div>
                <div className="tf-text">
                  <h4>Movies</h4>
                  <p>Debit card</p>
                </div>
              </div>

              <div className="Date">
                <h3>Mar, 22 2025</h3>
                <p>10:20 am</p>
              </div>
              <div className="price">
                <h3>$650.70</h3>
              </div>
              <Button className="pending" name="Pending" />
            </div>
            <div className="first-transaction">
              <div className="tf">
                <div className="tf-img">
                  <img src={Viva} alt="" />
                </div>
                <div className="tf-text">
                  <h4>Cinema</h4>
                  <p>Debit card</p>
                </div>
              </div>
              <div className="Date">
                <h3>Mar, 20 2025</h3>
                <p>10:20 am</p>
              </div>
              <div className="price">
                <h3>$4901.87</h3>
              </div>
              <Button className="completed" name="Completed" />
            </div>
          </div>
          <div className="spending-limit">
            <h5>This is the div for the spending limit</h5>

            <div className="quick-tf">
              <div className="quick-tf-head">
                <p className="quick-tf-head-1">Quick tranaction</p>
                <span>
                  <p className="quick-tf-head-p">Open</p>
                  <KeyboardArrowRightOutlinedIcon className="open" />
                </span>
              </div>
              <div className="quick-tf-images">
                <div className="add-more"></div>
                <div className="add-img">
                  <img src={Glovo} alt="" />
                </div>
                <div className="add-img">
                  <img src={Netflix} alt="" />
                </div>
                <div className="add-img">
                  <img src={Dstv} alt="" />
                </div>
                <div className="add-img">
                  <img src={Viva} alt="" />
                </div>
              </div>
            </div>
            <div className="credit-cards">
              <span>
                <h5>My cards</h5>
                <div className="view">
                  <p>View details</p>
                </div>
              </span>
              <div className="cc">
                <span className="cc-head">
                  <h4>
                    $15092<span className="low">.99</span>
                  </h4>
                  <div className="visa-img">
                    <img src={Visa} alt="" />
                  </div>
                </span>

                <span>
                  <p className="reduce">John Paul</p>
                  <p>**** **** **** 5643</p>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainNav;
