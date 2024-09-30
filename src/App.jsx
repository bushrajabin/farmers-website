import { useState } from "react";
import "./App.css";
import { BrowserRouter, Router, Routes, Route } from "react-router-dom";
import Home from "./page/Home";
import Login from "./components/LoginPage/Login";
import Signup from "./components/SignUp/Signup";
import Buyer from "./components/BuyerSignup/Buyer";
import Seller from "./components/SellerSignup/Seller";
import SellerDetails from "./components/SellerSignup/SellerDetails";
import Profile from "./components/Profile/Profile";
import { ToastContainer } from "react-toastify";


function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/buyer" element={<Buyer/>}/>
          <Route path="/seller" element={<Seller/>}/>
          <Route path="/details" element={<SellerDetails/>}/>
          <Route path="/profile" element={<Profile/>}/>

        </Routes>
      </BrowserRouter>

      
      {/* This is for toastify */}
      <ToastContainer
        position="top-left"
        autoClose={3000}
        closeOnClick
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </>
  );
}

export default App;
