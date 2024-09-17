import React from "react";
import "./Buyer.css";
function Buyer() {
  return (
    <div className="buyer-main-container">
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
      <button className="signup-button">SignUp</button>
    </div>
  );
}

export default Buyer;
