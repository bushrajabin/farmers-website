import React from "react";
import "./Login.css";
import { FaGoogle } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();
  const toBack = () => {
    navigate("/");
  };
  return (
    <>
      <div className="background-image"></div> {/* Background image layer */}
      {/* Login page start  */}
      <div className="login-main-container">
        {/* Logo start from here */}
        <nav className="nav-bar">
          <img src="/images/logo.png" alt="Logo" />
        </nav>
        {/* Logo nav end  */}

        {/* login form start */}
        <div className="login-form">
          <h3>It's good to have you back!</h3>
          <label htmlFor="email">Email Address*</label>
          <input type="text" placeholder="Email id" />
          <label htmlFor="password">Password*</label>
          <input type="password" placeholder="Password" />
          <div className="checkBox">
            {" "}
            <input type="checkbox" name="conditions" />
            <label htmlFor="conditions">
              you are agree to our terms and conditions!
            </label>
          </div>
          <a href="">ForgotPassword?</a>

          {/* login buttons start from here */}
          <div className="login-buttons">
            <button className="login-button">Login</button>
            <p>
              Don't Have any account?<a onClick={toBack}>SignUp</a>
            </p>
            <button className="google-button">
              {" "}
              <FaGoogle className="text-sm m-2" />
              Login With Google
            </button>
          </div>
        </div>
      </div>
      {/* Login form end  */}
    </>
  );
}

export default Login;
