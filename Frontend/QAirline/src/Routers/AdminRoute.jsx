import React from "react";
import { Route, Routes } from "react-router-dom";
import AdminSidebar from "../AdminComponent/AdminSidebar/AdminSidebar";
import Dashboard from "../AdminComponent/Dashboard/Dashboard";
import Airports from "../AdminComponent/Airport/AirportEdit";
import AllFlight from "../AdminComponent/Flight/AllFlight";

const AdminRoute = () => {
  return (
    <div className="flex">
      <div className="w-[20%]">
        <AdminSidebar />
      </div>
      <div className="w-[80%]">
        <Routes>
          <Route path="/" element={<Dashboard />}></Route>
          <Route path="/airport" element={<Airports />}></Route>
          <Route path="/flight" element={<AllFlight />}></Route>
          <Route path="/flight-status"></Route>
          <Route path="/passenger"></Route>
          <Route path="/feedback"></Route>
        </Routes>
      </div>
    </div>
  );
};

export default AdminRoute;
