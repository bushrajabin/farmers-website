import React from "react";
import { CiSearch } from "react-icons/ci";
import { IoMic } from "react-icons/io5";
import { FaRegBell } from "react-icons/fa";
import { FaRegUser } from "react-icons/fa";
import "./SellerHome.css";

function SellerHome() {
  return (
    <div>
      <nav className="sellerhome-nav">
        <img src="./images/logo.png" alt="" />
        <div className="searchbar">
          <CiSearch />
          <input type="text" placeholder="search" />
          <IoMic />
        </div>
        <div className="icons">
        <FaRegBell />
        <FaRegUser />
        </div>
   
      </nav>
    </div>
  );
}

export default SellerHome;
