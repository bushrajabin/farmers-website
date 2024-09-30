import React from "react";
import { sellerField } from "../../Common/Common";
import "./Seller.css";
import { GrFormNextLink } from "react-icons/gr";
import { useNavigate } from "react-router-dom";

function Seller() {
  const navigate = useNavigate();

  const nextbtn = () => {
    navigate("/details");
  };
  return (
    <>
      <div></div>
      <div className="seller-main-container">
        <div className="seller-top-div">SignIn as a seller</div>
        <div>
          {sellerField.map((data, index, arr) => {
            const { label, input } = data;

            return (
              <div className="seller-div">
                <label htmlFor="">{label}</label>
                <input
                  type={
                    label.toLowerCase().includes("password")
                      ? "password"
                      : "text"
                  }
                  placeholder={input}
                />
              </div>
            );
          })}
        </div>
        <button className="submit-next-button" onClick={nextbtn}>
          Submit and next <GrFormNextLink />
        </button>
      </div>
    </>
  );
}

export default Seller;
