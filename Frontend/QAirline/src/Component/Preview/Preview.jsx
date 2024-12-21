import React, { useEffect } from "react";
import {
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Paper,
  Divider,
  Button,
  Card,
} from "@mui/material";
import FlightIcon from "@mui/icons-material/Flight";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

import { useDispatch, useSelector } from "react-redux";
import { createSeat } from "../../State/Seat/Action";
import { useNavigate } from "react-router-dom";
import { getAllFlight } from "../../State/FlightAdmin/Action";
import { createFlightInstanceByAdmin } from "../../State/FlightInstanceAdmin/Action";
import FlightPreview from "./FlightPreview";

const flightClass = {
  ECONOMY_CLASS: { label: "Phổ thông", color: "#B993D6" },
  BUSINESS_CLASS: { label: "Thương gia", color: "#A2A6DB" },
  FIRST_CLASS: { label: "Hạng nhất", color: "#8CA6DB" },
};

const Preview = () => {
  const dispatch = useDispatch();
  const flight = useSelector((store) => store.flight);
  const flightAdmin = useSelector((store) => store.flightAdmin);
  const seat = useSelector((store) => store.seat);
  const jwt = localStorage.getItem("jwt");
  const navigate = useNavigate();
  // const [expanded, setExpanded] = useState(false);
  // const handleAccordionToggle = () => {
  //   setExpanded(!expanded);
  // };

  useEffect(() => {
    dispatch(getAllFlight({ jwt }));
  }, []);

  const sendRequestsSequentially = async () => {
    for (const customer of seat.customers) {
      try {
        await dispatch(
          createSeat({
            reqData: {
              flightId: flight.selectedOutboundFlight.flightInstance.flightId,
              date: flight.selectedOutboundFlight.flight.departureTime,
              ticket: flight.selectedOutboundFlight.ticket,
              seatNumber: customer.seatNumber.outbound,
              citizenId: customer.citizenId,
              firstName: customer.firstName,
              lastName: customer.lastName,
              phone: customer.phone,
              dob: customer.dob.format("YYYY-MM-DD"),
              gender: customer.gender,
            },
            jwt,
          })
        );
      } catch (error) {
        console.error("Error creating seat:", error);
      }
      if (flight.selectedOutboundFlight.flight.flightType === "round-trip") {
        try {
          await dispatch(
            createSeat({
              reqData: {
                flightId: flight.selectedInboundFlight.flightInstance.flightId,
                date: flight.selectedInboundFlight.flight.departureTime,
                ticket: flight.selectedInboundFlight.ticket,
                seatNumber: customer.seatNumber.inbound,
                citizenId: customer.citizenId,
                firstName: customer.firstName,
                lastName: customer.lastName,
                phone: customer.phone,
                dob: customer.dob.format("YYYY-MM-DD"),
                gender: customer.gender,
              },
              jwt,
            })
          );
        } catch (error) {
          console.error("Error creating seat:", error);
        }
      }
    }
  };

  let flightOutboundInstance = null;
  let flightInboundInstance = null;

  if (
    flight.selectedOutboundFlight &&
    flight.selectedOutboundFlight.flightInstance &&
    flight.selectedOutboundFlight.flightInstance.flightId
  ) {
    let flightOutboundSelected = flightAdmin.flights.find(
      (item) =>
        item.id === flight.selectedOutboundFlight.flightInstance.flightId
    );
    flightOutboundInstance = {
      flight: flightOutboundSelected,
      date: flight.selectedOutboundFlight.flight.departureTime,
    };
  }

  if (
    flight.selectedInboundFlight &&
    flight.selectedInboundFlight.flightInstance &&
    flight.selectedInboundFlight.flightInstance.flightId
  ) {
    let flightInboundSelected = flightAdmin.flights.find(
      (item) => item.id === flight.selectedInboundFlight.flightInstance.flightId
    );
    flightInboundInstance = {
      flight: flightInboundSelected,
      date: flight.selectedInboundFlight.flight.departureTime,
    };
  }

  const handleSubmit = async () => {
    // dispatch
    console.log(
      flight.selectedOutboundFlight,
      flight.selectedInboundFlight,
      seat.customers
    );

    if (flightOutboundInstance != null) {
      dispatch(
        createFlightInstanceByAdmin({ reqData: flightOutboundInstance, jwt })
      );
    }
    if (flightInboundInstance != null) {
      dispatch(
        createFlightInstanceByAdmin({ reqData: flightInboundInstance, jwt })
      );
    }

    // for (const customer of seat.customers) {
    //   await dispatch(
    //     createSeat({
    //       reqData: {
    //         flightId: flight.selectedOutboundFlight.flightInstance.flightId,
    //         date: flight.selectedOutboundFlight.flight.departureTime,
    //         ticket: flight.selectedOutboundFlight.ticket,
    //         seatNumber: customer.seatNumber.outbound,
    //         citizenId: customer.citizenId,
    //         firstName: customer.firstName,
    //         lastName: customer.lastName,
    //         phone: customer.phone,
    //         dob: customer.dob.format("YYYY-MM-DD"),
    //         gender: customer.gender,
    //       },
    //       jwt,
    //     })
    //   );
    //   if (flight.selectedOutboundFlight.flight.flightType === "round-trip") {
    //     dispatch(
    //       createSeat({
    //         reqData: {
    //           flightId: flight.selectedInboundFlight.flightInstance.flightId,
    //           date: flight.selectedInboundFlight.flight.departureTime,
    //           ticket: flight.selectedInboundFlight.ticket,
    //           seatNumber: customer.seatNumber.inbound,
    //           citizenId: customer.citizenId,
    //           firstName: customer.firstName,
    //           lastName: customer.lastName,
    //           phone: customer.phone,
    //           dob: customer.dob.format("YYYY-MM-DD"),
    //           gender: customer.gender,
    //         },
    //         jwt,
    //       })
    //     );
    //   }
    // }
    sendRequestsSequentially();
    navigate("/");
  };

  return (
    <div className="w-[90vw] lg:w-[50vw] mx-auto m-4 p-5 bg-indigo-100 space-y-4">
      <div className=" justify-items-center">
        <Typography variant="h4">Preview</Typography>
      </div>
      <FlightPreview
        flight={flight.selectedOutboundFlight}
        seat={seat.customers.map((customer) => customer.seatNumber.outbound)}
      />
      {flight.selectedOutboundFlight.flight.flightType === "round-trip" && (
        <FlightPreview
          flight={flight.selectedInboundFlight}
          seat={seat.customers.map((customer) => customer.seatNumber.inbound)}
        />
      )}
      <div>
        <Paper className="grid grid-cols-2 justify-between mx-auto w-3/4 mb-6 px-8 p-2 gap-x-4">
          <div className="col-span-2 justify-items-center mt-3">
            <Typography variant="h5">
              Thanh toán:{" "}
              {flight.selectedOutboundFlight.ticket.price *
                flight.selectedOutboundFlight.flight.numPassenger +
                flight.selectedInboundFlight.ticket.price *
                  flight.selectedInboundFlight.flight.numPassenger}{" "}
              VND
            </Typography>
          </div>
        </Paper>
      </div>
      <div className="grid grid-cols-2">
        <div className="flex justify-end mr-5">
          <Button
            variant="contained"
            sx={{
              background: "linear-gradient(to right, #B993D6, #8CA6DB)",
            }}
          >
            Quay lại
          </Button>
        </div>
        <div className="flex justify-start ml-5">
          <Button
            variant="contained"
            sx={{
              background: "linear-gradient(to right, #B993D6, #8CA6DB)",
            }}
            onClick={handleSubmit}
          >
            Xác nhận
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Preview;
