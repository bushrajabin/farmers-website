import React from "react";
import { CiSearch } from "react-icons/ci";
import { IoMic } from "react-icons/io5";
import { FaRegBell, FaRegUser } from "react-icons/fa";
import { footer, SellProduct } from "../../Common/Common";
import "./BuyerHome.css";

function BuyerHome() {
  return (
    <div className="buyer-main-div">
      {/* Navigation Bar */}
      <div className="buyerhome-nav">
        <img src="./images/logo.png" alt="Logo" />
        <div className="searchbar">
          <CiSearch size={23} className="icon1" />
          <input type="text" placeholder="Search" />
          <IoMic size={24} className="icon2" />
        </div>
        <div className="icons">
          <FaRegBell size={24} className="notification" />
          <FaRegUser size={24} className="user-profile-icon" />
        </div>
      </div>

      {/* Home Image */}
      <div className="buyer-home-image">
        <img src="./images/buyerhomeimage.png" alt="Home" />
      </div>

      {/* Products for Sale */}
      <div className="post-div">
        <div className="sell-product-main-div">
          <div className="sell-header">
            <h3>Products for Sale</h3>
            <button className="sell-button">View All</button>
          </div>
          <div className="sell-product-div">
            {SellProduct.map((product) => (
              <div key={product.id} className="product-card">
                <img
                  src={product.image}
                  alt={product.name}
                  className="product-image"
                />
                <h2>{product.name}</h2>
                <div className="product-info">
                  {/* Map over product icons */}
                  {product.icon &&
                    product.icon.map((icon, index) => {
                      const { component: IconComponent, title } = icon;
                      return (
                        <div key={index} className="product-icon">
                          <IconComponent />
                          <h4>{title}</h4>
                        </div>
                      );
                    })}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Products for Rent */}
        <div className="rent-product-main-div">
          <div className="sell-header">
            <h3>Products for Rent</h3>
            <button className="sell-button">View All</button>
          </div>

          <div className="rent-product-div">
          {SellProduct.map((product) => (
              <div key={product.id} className="product-card">
                <img
                  src={product.image}
                  alt={product.name}
                  className="product-image"
                />
                <h2>{product.name}</h2>
                <div className="product-info">
                  {/* Map over product icons */}
                  {product.icon &&
                    product.icon.map((icon, index) => {
                      const { component: IconComponent, title } = icon;
                      return (
                        <div key={index} className="product-icon">
                          <IconComponent />
                          <h4>{title}</h4>
                        </div>
                      );
                    })}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="footer-div">
        {footer.map((data, index) => {
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
