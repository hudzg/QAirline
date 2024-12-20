import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  getFlightInstanceByAdmin,
} from "../../State/FlightInstanceAdmin/Action";

const FlightInstance = () => {
  const navigate = useNavigate();
  const flight = useSelector((store) => store.flightAdmin);
  const flightInstanceAdmin = useSelector((store) => store.flightInstanceAdmin);
  const jwt = localStorage.getItem("jwt");
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getFlightInstanceByAdmin({jwt}));
  }, []);
  return <div>this is flight instance</div>;
};

export default FlightInstance;
