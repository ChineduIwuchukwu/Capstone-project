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
import { Bar } from "react-chartjs-2";
import "chart.js/auto";
import { graphData } from "../data/sourceData";

const MainNav = () => {
  const saving = [
    {
      label: "Vacation",
      amount: "$10,000",
      progress: "25%",
      styles: "inner-slider-one",
      bulletColor: "royalblue",
    },
    {
      label: "Mortgage Payment",
      amount: "$127,000",
      progress: "65%",
      styles: "inner-slider-two",
      bulletColor: "skyblue",
    },
    {
      label: "Buy a car",
      amount: "$51,290",
      progress: "80%",
      styles: "inner-slider-three",
      bulletColor: "navy",
    },
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
            <SearchOutlinedIcon className="search-icon" />
            <input type="text" placeholder="Search" className="search-bar" />
          </div>

          <div className="notification">
            <NotificationsNoneOutlinedIcon className="notify-icon" />
          </div>

          <div className="profile-img">
            <img src={Img1} alt="" />
          </div>
        </div>
      </div>
      <div className="content">
        <div className="graph-cards">
          <div className="graph">
            <Bar
              data={{
                labels: graphData.labels,
                datasets: graphData.datasets,
              }}
            />
          </div>

          <div className="cards">
            <div className="saving-goals">
              <h4>Saving goals</h4>
              <div className="saving-goals-icon">
                <AddOutlinedIcon className="icon" />
              </div>
            </div>

            {saving.map(
              ({ label, amount, progress, styles, bulletColor }, index) => (
                <div key={index} className="Vacation">
                  <div className="v-head">
                    <span className="span">
                      <div
                        style={{ backgroundColor: bulletColor }}
                        className="label-box"
                      ></div>
                      <h6>{label}</h6>
                    </span>
                    <h6>{amount}</h6>
                  </div>

                  <div className="progress-bar">
                    <div className="slider">
                      <div className={styles}></div>
                    </div>
                    <p className="progress">{progress}</p>
                  </div>
                </div>
              )
            )}

            <div className="spendinng-progress">
              <h4>Expenses</h4>
              <div className="spending-slider">
                <div className="spending-progress-1"></div>
              </div>
              <span className="budget-limit">
                <span className="limit-content">
                  <div className="ss"></div> <h5>$7000</h5>
                </span>
                <p>Spent already</p>
              </span>
              <span className="budget-limit">
                <span className="limit-content">
                  <div className="ss-1"></div> <h5>$10000</h5>
                </span>
                <p>Budget for the month</p>
              </span>
            </div>
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
                <Button className="completed" name="Completed" />
              </div>
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
                <Button className="failed" name="Decined" />
              </div>
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
                <Button className="pending" name="Pending" />
              </div>
            </div>
            {/* <div className="first-transaction">
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
            </div> */}
          </div>
          <div className="spending-limit">
            <div className="quick-tf">
              <div className="quick-tf-head">
                <p className="quick-tf-head-1">Quick tranaction</p>
                <span>
                  <p className="quick-tf-head-p">Open</p>
                  <KeyboardArrowRightOutlinedIcon className="open" />
                </span>
              </div>
              <div className="quick-tf-images">
                {/* <div className="add-more"></div> */}
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
