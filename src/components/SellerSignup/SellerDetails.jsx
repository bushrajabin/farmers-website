import React, { useRef, useState } from "react";
import { BankDetails } from "../../Common/Common"; // Your import for BankDetails array
import { BsBank2 } from "react-icons/bs";
import { CiLink } from "react-icons/ci";
import { useNavigate } from "react-router-dom";

function SellerDetails() {
  const navigate = useNavigate();
  const fileInputRefs = useRef({}); // Ref for hidden file inputs
  const [selectedFiles, setSelectedFiles] = useState({}); // State to store selected files

  // Handle icon click to open file selector
  const handleIconClick = (index) => {
    fileInputRefs.current[index].click(); // Programmatically click the hidden file input
  };

  // Handle file change and update the state
  const handleFileChange = (e, index) => {
    const file = e.target.files[0];
    setSelectedFiles((prevState) => ({
      ...prevState,
      [index]: file, // Store file by index
    }));
  };

  const submitDetails = () => {
    navigate("/sellerHome");
  };

  return (
    <>
      <div className="seller-details-main-container">
        <div className="sellerdetails-top-div">
          <BsBank2 />
          <h2>Add your Details & Bank details here!!</h2>
        </div>

        <div>
          {BankDetails.map((data, index) => {
            const { label, input } = data;

            return (
              <div className="seller-details" key={index}>
                <label>{label}</label>

                <div className="input-fields">
                  {input.toLowerCase() === "file" ? (
                    <div>
                      {/* Conditionally hide the icon once a file is uploaded */}
                      {!selectedFiles[index] && (
                        <div
                          className="user-icon"
                          onClick={() => handleIconClick(index)}
                        >
                          <CiLink size={20} />
                        </div>
                      )}

                      <input
                        type="file"
                        ref={(el) => (fileInputRefs.current[index] = el)} // Ref for each file input
                        style={{ display: "none" }} // Hide the file input
                        onChange={(e) => handleFileChange(e, index)} // Handle file change
                      />

                      {/* Display the file name or preview */}
                      {selectedFiles[index] && (
                        <div className="file-preview">
                          {selectedFiles[index].type.startsWith("image/") ? (
                            <img
                              src={URL.createObjectURL(selectedFiles[index])}
                              alt="Uploaded file"
                              width={100}
                            />
                          ) : (
                            <p>{selectedFiles[index].name}</p> // Display file name if not an image
                          )}
                        </div>
                      )}
                    </div>
                  ) : (
                    <input type={input} /> // Render normal text input for other fields
                  )}
                </div>
              </div>
            );
          })}
        </div>

        <button onClick={submitDetails} className="submit-btn">
          Submit
        </button>
      </div>
    </>
  );
}

export default SellerDetails;
