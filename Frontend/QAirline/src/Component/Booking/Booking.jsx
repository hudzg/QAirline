import { Typography } from "@mui/material";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  addGetFlightRequest,
  getOutboundFlight,
} from "../../State/Flight/Action";
import BookingCard from "./BookingCard";

const Booking = () => {
  const flight = useSelector((store) => store.flight);
  const jwt = localStorage.getItem("jwt");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    const getFlightReq = localStorage.getItem("getFlightReq");
    if (getFlightReq) {
      dispatch(addGetFlightRequest(JSON.parse(getFlightReq)));
    }
  }, []);

  useEffect(() => {
    if (flight.getFlightReq.departureAirport.id) {
      dispatch(
        getOutboundFlight({
          departureAirportId: flight.getFlightReq.departureAirport.id,
          arrivalAirportId: flight.getFlightReq.arrivalAirport.id,
          departureTime: flight.getFlightReq.departureTime,
          jwt,
        })
      );
    }
  }, [flight.getFlightReq]);

  return (
    <div className="w-[90vw] lg:w-[70vw] m-auto">
      <div className="mt-5">
        <Typography variant="h3" textAlign={"center"} gutterBottom>
          Chọn chuyến bay
        </Typography>
        <Typography variant="h5" textAlign={"center"} gutterBottom>
          {`${flight.getFlightReq.departureAirport?.name} (${flight.getFlightReq.departureAirport?.iata})`}{" "}
          đến{" "}
          {`${flight.getFlightReq.arrivalAirport?.name} (${flight.getFlightReq.arrivalAirport?.iata})`}
        </Typography>
        <Typography variant="body1" textAlign={"center"}>
          {flight.getFlightReq.departureTime}
        </Typography>
      </div>
      <div>
        {flight.outboundFlights.map((item) => (
          <BookingCard item={item} key={item.flightId} />
        ))}
      </div>
    </div>
  );
};

export default Booking;
