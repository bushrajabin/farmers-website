import React from "react";
import "./Signup.css";

function Signup() {
  return (
    <div className="signup-main-container">
      <div className="background-form">
        <div className="signup-header">
          {" "}
          <h1>Sign-up now</h1>
        </div>

        <h3>Just fill the following details to get started!</h3>
        <label htmlFor="">Full Name*</label>
        <input type="text" placeholder="Enter Your Full Name" />
        <label htmlFor="">Email*</label>
        <input type="email" placeholder="Enter Your Email Id" />
        <label htmlFor="">Mobile Number*</label>
        <input type="text" placeholder="Enter Your Mobile Number" />
        <label htmlFor="">password*</label>
        <input type="password" placeholder="Enter Your password" />
        <label htmlFor="">confirm password*</label>
        <input type="password" placeholder="Enter Your confirm password" />
      </div>
      
      <div className="singup-option">
        <h3>Are you registering as a buyer or a seller?</h3>
        <button className="buyer-btn">as a buyer</button>
        <button className="seller-btn">as a seller</button>
      </div>
    </div>
  );
}

export default Signup;
