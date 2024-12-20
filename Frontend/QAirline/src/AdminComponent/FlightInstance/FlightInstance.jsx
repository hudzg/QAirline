import React, { useEffect, useState } from "react";
import { Typography, Button } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  getFlightInstanceByAdmin,
} from "../../State/FlightInstanceAdmin/Action";

const FlightInstance = () => {
  const navigate = useNavigate();
  const flightInstanceAdmin = useSelector((store) => store.flightInstanceAdmin);
  const jwt = localStorage.getItem("jwt");
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getFlightInstanceByAdmin({jwt}));
  }, []);
  console.log("this is flight instance: ",flightInstanceAdmin.flightInstances)
  return (
    <div className="w-[50vw] justify-self-center mx-auto m-4 p-5 bg-indigo-100">
      <div className="flex justify-between items-center">
        <Typography variant="h4">Quản lý trạng thái chuyến bay</Typography>
        <div className="flex">
        </div>
      </div>
    </div>
  );
};

export default FlightInstance;
