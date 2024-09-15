import React from "react";
import "./Frame1.css";
import { useNavigate } from "react-router-dom";

function Frame1() {
  const navigate=useNavigate();

  const toLogin=()=>{
    navigate('/login')
  }
  return (
    <div className="frame-main-container">
      <div className="frame-left-side">
        <h2>Agriculture</h2>
        <p>
          Backbone of many economies,providing food, raw materials, and
          livelihoods for millions worldide.
        </p>
      </div>
      <div className="frame-main-buttons">
        <button onClick={toLogin}>Login</button>
        <button>SignUp</button>
      </div>
    </div>
  );
}

export default Frame1;
