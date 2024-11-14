import React from "react";
import { Route, Routes } from "react-router-dom";
import AdminSidebar from "../AdminComponent/AdminSidebar/AdminSidebar";
import Dashboard from "../AdminComponent/Dashboard/Dashboard";

const AdminRoute = () => {
  return (
    <div className="flex">
      <div className="w-[20%]">
        <AdminSidebar />
      </div>
      <div>
        <Routes>
          <Route path="/" element={<Dashboard />}></Route>
          <Route path="/airport"></Route>
          <Route path="/flight"></Route>
          <Route path="/flight-status"></Route>
          <Route path="/passenger"></Route>
          <Route path="/feedback"></Route>
        </Routes>
      </div>
    </div>
  );
};

export default AdminRoute;
