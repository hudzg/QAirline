import React from "react";
import { Route, Routes } from "react-router-dom";
import AdminRoute from "./AdminRoute";
import CustomerRoute from "./CustomerRoute";

const Routers = () => {
  return (
    // <CustomerRoute />
    <Routes>
      <Route path="/*" element={<CustomerRoute />}></Route>
      <Route path="/admin/*" element={<AdminRoute />} />
    </Routes>
  );
};

export default Routers;
