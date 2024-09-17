import { useState } from "react";
import "./App.css";
import { BrowserRouter, Router, Routes, Route } from "react-router-dom";
import Home from "./page/Home";
import Login from "./components/LoginPage/Login";
import Signup from "./components/SignUp/Signup";
import Buyer from "./components/BuyerSignup/Buyer";
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
