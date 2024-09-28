import React from "react";
import { BankDetails } from "../../Common/Common";
import "./Seller.css";
import { BsBank2 } from "react-icons/bs";

function SellerDetails() {
  return (
    <>
      <div className="seller-details-main-container">
        <div className="sellerdetails-top-div">
          {" "}
          <BsBank2 />
          <h2>
          Add your Details & Bank details here!!
          </h2>
         
        </div>
        {BankDetails.map((data, index, arr) => {
          const { label, input } = data;
          return (
            <div className="seller-details">
              <label htmlFor="">{label}</label>
              <input type={input} />
            </div>
          );
        })}

        <button className="submit-btn">Submit</button>
      </div>
    </>
  );
}

export default SellerDetails;
