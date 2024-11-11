import React from "react";
import { Route, Routes } from "react-router-dom";
import Auth from "../Component/Auth/Auth";
import Footer from "../Component/Footer/Footer";
import Home from "../Component/Home/Home";
import Navbar from "../Component/Navbar/Navbar";

const CustomerRoute = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
      </Routes>
      <Auth />
      <Footer />
    </div>
  );
};

export default CustomerRoute;
