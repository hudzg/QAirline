import React, { useEffect, useState } from "react";
import { Typography, Button } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import dayjs from "dayjs";
import FlightCard from "./FlightCard";
import { useDispatch, useSelector } from "react-redux";
import { getAllFlight } from "../../State/FlightAdmin/Action";
import { useNavigate } from "react-router-dom";

const FlightManagement = () => {
  const navigate = useNavigate();
  const flight = useSelector((store) => store.flightAdmin);
  const jwt = localStorage.getItem("jwt");
  const dispatch = useDispatch();

  // chuyển hướng đến detail
  const navToDetail = () => {
    navigate("/admin/flight-detail");
  };
  //chuyển hướng đến add flight
  const navToFlightAdd = () => {
    navigate("/admin/flight-add");
  };

  useEffect(() => {
    dispatch(getAllFlight({ jwt }));
  }, []);
  // console.log("this is all flight: ", flight.flights);
  return (
    <div className="w-[50vw] justify-self-center mx-auto m-4 p-5 bg-indigo-100">
      <div className="flex justify-between items-center">
        <Typography variant="h4">Quản lý chuyến bay</Typography>
        <div className="flex">
          <Button onClick={navToFlightAdd}>
            <Typography color="textPrimary">Thêm chuyến bay </Typography>
            <AddIcon />
          </Button>
        </div>
      </div>
      {flight.flights.map((item) => (
        <FlightCard key={item.id} flightInfo={item} navToDetail={navToDetail} />
      ))}
    </div>
  );
};

export default FlightManagement;
