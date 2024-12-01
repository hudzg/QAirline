import { Typography } from "@mui/material";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  addGetInboundFlightRequest,
  getInboundFlight,
} from "../../State/Flight/Action";
import BookingCardInbound from "./BookingCardInbound";

const BookingInbound = () => {
  const flight = useSelector((store) => store.flight);
  const jwt = localStorage.getItem("jwt");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    const getInboundFlightReq = localStorage.getItem("getInboundFlightReq");
    if (getInboundFlightReq) {
      dispatch(addGetInboundFlightRequest(JSON.parse(getInboundFlightReq)));
    }
  }, []);

  useEffect(() => {
    if (flight.getInboundFlightReq.departureAirport.id) {
      dispatch(
        getInboundFlight({
          departureAirportId: flight.getInboundFlightReq.departureAirport.id,
          arrivalAirportId: flight.getInboundFlightReq.arrivalAirport.id,
          departureTime: flight.getInboundFlightReq.departureTime,
          jwt,
        })
      );
    }
  }, [flight.getInboundFlightReq]);

  return (
    <div className="w-[60vw] m-auto">
      <div className="mt-5">
        <Typography variant="h3" textAlign={"center"} gutterBottom>
          Chọn chuyến bay
        </Typography>
        <Typography variant="h5" textAlign={"center"} gutterBottom>
          {`${flight.getInboundFlightReq.departureAirport?.name} (${flight.getInboundFlightReq.departureAirport?.iata})`}{" "}
          đến{" "}
          {`${flight.getInboundFlightReq.arrivalAirport?.name} (${flight.getInboundFlightReq.arrivalAirport?.iata})`}
        </Typography>
        <Typography variant="body1" textAlign={"center"}>
          {flight.getInboundFlightReq.departureTime}
        </Typography>
      </div>
      <div>
        {flight.inboundFlights.map((item) => (
          <BookingCardInbound item={item} key={item.flightId} />
        ))}
      </div>
    </div>
  );
};

export default BookingInbound;
