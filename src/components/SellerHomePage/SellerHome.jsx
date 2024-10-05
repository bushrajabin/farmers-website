import React from "react";
import { CiSearch } from "react-icons/ci";
import { IoMic } from "react-icons/io5";
import { FaRegBell } from "react-icons/fa";
import { FaRegUser } from "react-icons/fa";
import "./SellerHome.css";
import { uploads } from "../../Common/Common";
import { footer } from "../../Common/Common";

function SellerHome() {
  return (
    <div className="seller-main-div">
      {/* Seller nav bar */}
      <div className="sellerhome-nav">
        <img src="./images/logo.png" alt="" />
        <div className="searchbar">
          <CiSearch size={23} />
          <input type="text" placeholder="search" />
          <IoMic size={24} />
        </div>
        <div className="icons">
          <FaRegBell size={24} />
          <FaRegUser size={24} className="user-profile-icon" />
        </div>
      </div>

      {/* home image */}
      <div className="home-image">
        <img src="./images/img2.jpg" alt="" />
      </div>

      {/* Gallery recent upload images div */}
      <div className="recent-uploads-div">
        <div className="recent-top-div">
          <h2>Recent Uploads</h2>
          <button>View All</button>
        </div>
        <div className="gallery-div">
          {uploads.map((image, index) => (
            <div key={index} className="gallery-item">
              <img src={image} alt="" />
            </div>
          ))}
        </div>
      </div>

      {/* Rent or sell div */}

      <div className="post-div">
        <div className="sell-div">
          <img src="./images/fruits.png" alt="" />
          <p>
            Grow your business by offering fresh, high quality vegitables and
            fruits
          </p>
          <button className="sell-btn">Post item for sell</button>
        </div>
        <div className="rent-div">
          <img src="./images/machine.png" alt="" />
          <p>Increase your revenue by renting out reliable farm machinery</p>
          <button className="rent-btn">Post item for rent</button>
        </div>
      </div>
      {/* Footer nav part */}
      <div className="footer-div">
        {footer.map((data, index, arr) => {
          const { icon: Icon, title } = data;
          return (
            <div className="footer-options" key={index}>
              <Icon size={27} />
              <h2>{title}</h2>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default SellerHome;
