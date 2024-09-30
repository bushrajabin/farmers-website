import React, { useRef, useState } from "react";
import { profile } from "../../Common/Common";
import { FaRegUserCircle } from "react-icons/fa";
import "./profile.css";

function Profile() {
  const [selectedFile, setSelectedFile] = useState(null); // State to store the uploaded file
  const fileInputRef = useRef(null); // Ref for the hidden file input

  // Handle icon click to open file selector
  const handleIconClick = () => {
    fileInputRef.current.click(); // Programmatically click the hidden file input
  };

  // Handle file change and update the state
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setSelectedFile(file); // Store the uploaded file
  };

  return (
    <div className="profile-main-container">
      <div className="profile-top-part">
        <div className="user-left-part">
          {/* Conditionally show either the icon or the uploaded image */}
          <div className="user-icon" onClick={handleIconClick}>
            {/* If no file is uploaded, show the icon */}
            {!selectedFile ? (
              <FaRegUserCircle size={60} />
            ) : (
              // If a file is uploaded, show the image preview
              <img
                src={URL.createObjectURL(selectedFile)}
                alt="Uploaded file"
                width={100}
                style={{ cursor: "pointer" }} // Keep clickable to allow changing the image
              />
            )}
            {/* Hidden file input */}
            <input
              type="file"
              ref={fileInputRef}
              style={{ display: "none" }}
              onChange={handleFileChange} 
            />
          </div>
          
          <h3>useremail@gmail.com</h3>
        </div>

        <div className="user-name">
          <h2>
            Hi <br />
            User Name
          </h2>
        </div>
      </div>

      <div className="profile-bottom-part">
        {profile.map((data, index) => {
          const { icon: Icon, title } = data; // Assuming icon is a component, renamed to Icon
          return (
            <div key={index} className="option-main-container">
              <div className="profile-options">
                <Icon />
                <h4>{title}</h4>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Profile;
