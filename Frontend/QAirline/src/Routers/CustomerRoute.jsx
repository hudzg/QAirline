import React from "react";
import { Route, Routes } from "react-router-dom";
import Auth from "../Component/Auth/Auth";
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
    </div>
  );
};

export default CustomerRoute;
