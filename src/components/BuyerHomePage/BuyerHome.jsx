import React from "react";
import { CiSearch } from "react-icons/ci";
import { IoMic } from "react-icons/io5";
import { FaRegBell } from "react-icons/fa";
import { FaRegUser } from "react-icons/fa";
// import { uploads } from "../../Common/Common";
import { footer } from "../../Common/Common";
import "./BuyerHome.css"
function BuyerHome() {
  return (
    <div className="buyer-main-div">
      {/* Seller nav bar */}
      <div className="buyerhome-nav">
        <img src="./images/logo.png" alt="" />
        <div className="searchbar">
          <CiSearch size={23} className="icon1" />
          <input type="text" placeholder="search" />
          <IoMic size={24} className="icon2" />
        </div>
        <div className="icons">
          <FaRegBell size={24} className="notification" />
          <FaRegUser size={24} className="user-profile-icon" />
        </div>
      </div>

      {/* home image */}
      <div className="buyer-home-image">
        <img src="./images/img2.jpg" alt="" />
      </div>

      {/* Rent or sell div */}

      <div className="post-div">
        <div className="sell-div">
          <h3>Products for sell</h3>
          <button className="sell-btn">View All</button>
        </div>
        <div className="rent-div">
          <h3>Products for rent</h3>
          <button className="rent-btn">View All</button>
        </div>
      </div>
      {/* Footer nav part */}
      <div className="footer-div">
        {footer.map((data, index, arr) => {
          const { icon: Icon, title } = data;
          return (
            <div className="footer-options" key={index}>
              <Icon size={27} className="footer-icons" />
              <h2>{title}</h2>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default BuyerHome;
