import React from "react";
import "./Signup.css";
import { ImCross } from "react-icons/im";
import { useNavigate } from "react-router-dom";
import { buyerField } from "../../Common/Common";

function Signup() {
  const navigate = useNavigate();

  // This is for navigate to frame1-page
  const tologin = () => {
    navigate("/");
  };

  // This is for buyer page-----
  const toBuyer = () => {
    navigate("/buyer");
  };

  // Navigate to seller page
  const toseller = () => {
    navigate("/seller");
  };
  return (
    <div className="signup-main-container">
      <div className="background-form">
        <div className="signup-header">
          {" "}
          <h1>Sign-up now</h1>
        </div>

        <div>
          <h3>Just fill the following details to get started!</h3>
          {buyerField.map((data, index, arr) => {
            const { label, input } = data;
            return (
              <div className="buyer-field">
                <label htmlFor="">{label}</label>
                <input type={input} />
              </div>
            );
          })}
        </div>
      </div>

      <div className="singup-option">
        <ImCross onClick={tologin} className="cursor-pointer" />
        <h3>Are you registering as a buyer or a seller?</h3>
        <button className="buyer-btn" onClick={toBuyer}>
          as a buyer
        </button>
        <button className="seller-btn" onClick={toseller}>
          as a seller
        </button>
      </div>
    </div>
  );
}

export default Signup;
