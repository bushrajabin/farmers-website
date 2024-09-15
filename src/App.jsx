import { useState } from "react";
import "./App.css";
import { BrowserRouter, Router, Routes, Route } from "react-router-dom";
import Home from "./page/Home";
import Login from "./components/LoginPage/Login";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="/login" element={<Login />} /> */}
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
