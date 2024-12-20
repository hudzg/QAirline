import React from "react";
import { Route, Routes } from "react-router-dom";
import AdminSidebar from "../AdminComponent/AdminSidebar/AdminSidebar";
import Dashboard from "../AdminComponent/Dashboard/Dashboard";
import Airports from "../AdminComponent/Airport/AirportEdit";
import FlightManagement from "../AdminComponent/Flight/FlightManagement";
import Airplane from "../AdminComponent/Airplane/AirplaneEdit";
import AddFlight from "../AdminComponent/Flight/AddFlight";
import FlightInstance from "../AdminComponent/FlightInstance/FlightInstance";

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
          <Route path="/flight" element={<FlightManagement />}></Route>
          <Route path="/flight-add" element={<AddFlight />}></Route>
          <Route path="/airplane" element={<Airplane />}></Route>
          <Route path="/flight-status" element={<FlightInstance />}></Route>
          <Route path="/passenger"></Route>
          <Route path="/feedback"></Route>
        </Routes>
      </div>
    </div>
  );
};

export default AdminRoute;
