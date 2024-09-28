import React from "react";
import "./Buyer.css";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { buyerField } from "../../Common/Common";

import { useNavigate } from "react-router-dom";
function Buyer() {
  const navigate = useNavigate();
  const signup = () => {
    navigate("/");
    toast.success("Signup successfully!!!!");
  };
  return (
    <>
      <div className="background-blur"></div>

      <div className="buyer-main-container">
        <div className="signup-header">
          {" "}
          <h1>Sign-up now</h1>
        </div>

        <div className="buyer-field-main-div">
          <h3>Just fill the following details to get started!</h3>
          {buyerField.map((data, index, arr) => {
            const { label, input } = data;
            return (
              <div className="buyer-field">
                <label htmlFor="">{label}</label>
                <input
                  type={
                    label.toLowerCase().includes("password")
                      ? "password"
                      : "text"
                  }
                  placeholder={input}
                />{" "}
              </div>
            );
          })}
          <button className="signup-button" onClick={signup}>
            SignUp
          </button>
        </div>
      </div>
    </>
  );
}

export default Buyer;
