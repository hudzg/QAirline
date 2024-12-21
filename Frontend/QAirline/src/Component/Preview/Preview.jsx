import React, { useEffect } from "react";
import {
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Paper,
  Divider, Button, Card
} from "@mui/material";
import FlightIcon from "@mui/icons-material/Flight";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

import { useDispatch, useSelector } from "react-redux";
import { createSeat } from "../../State/Seat/Action";
import { useNavigate } from "react-router-dom";
import { getAllFlight } from "../../State/FlightAdmin/Action";
import { createFlightInstanceByAdmin } from "../../State/FlightInstanceAdmin/Action";

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
    <div className="w-[90vw] lg:w-[50vw] mx-auto m-4 p-5 space-y-4">
      <div className=" justify-items-center">
        <Typography variant="h4">Xem lại</Typography>
      </div>
      <div>
        <Accordion elevation={6} className="rounded-s-2xl">
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>

            <Paper elevation={0} className="grid grid-cols-3 items-center justify-items-center h-28 mb-6 w-full">
              <div>
                <Typography variant="h4">HAN</Typography>
                <Typography variant="body1">Khởi hành</Typography>
                <Typography variant="h5">17:00</Typography>
                <Typography variant="body1">24/03/2024</Typography>
              </div>
              <div className="flex-col flex items-center">
                <FlightIcon fontSize="large" sx={{ transform: "rotate(90deg)" }} />
                <Typography align="center" variant="body2" sx={{ color: "text.secondary" }}>
                  20 giờ 20 phút
                </Typography>
              </div>
              <div>
                <Typography variant="h4">SGN</Typography>
                <Typography variant="body1">Điểm đến</Typography>
                <Typography variant="h5">17:00</Typography>
                <Typography variant="body1">24/03/2024</Typography>
              </div>
            </Paper>
          </AccordionSummary>

          {/* AccordionDetails chứa thông tin chi tiết */}
          <AccordionDetails>
            <div>
              <Typography variant="h5" align="center">Chi tiết lượt đi</Typography>
            </div>
            <Paper className="grid grid-cols-2 justify-between mx-auto w-4/5  mb-6 px-12 p-2">
              <div>
                <Typography>Tổng hành khách: 2</Typography>
              </div>
              <div>
                <Typography>Vé thương gia: 5.000.000 VND</Typography>
              </div>
              <div>
                <Typography>Hoàn vé: Được phép</Typography>
              </div>
              <div>
                <Typography>Hành lý ký gửi: 15.5 kg</Typography>
              </div>
              <div>
                <Typography>Ghế đã chọn: E5, E6</Typography>
              </div>
              <div>
                <Typography>Hành lý xách tay: 5kg</Typography>
              </div>
            </Paper>
          </AccordionDetails>
        </Accordion>
      </div>
      <div>
        <Accordion elevation={6}>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>

            <Paper elevation={0} className="grid grid-cols-3 items-center justify-items-center h-28 mb-6 w-full">
              <div>
                <Typography variant="h4">HAN</Typography>
                <Typography variant="body1">Khởi hành</Typography>
                <Typography variant="h5">17:00</Typography>
                <Typography variant="body1">24/03/2024</Typography>
              </div>
              <div className="flex-col flex items-center">
                <FlightIcon fontSize="large" sx={{ transform: "rotate(90deg)" }} />
                <Typography align="center" variant="body2" sx={{ color: "text.secondary" }}>
                  20 giờ 20 phút
                </Typography>
              </div>
              <div>
                <Typography variant="h4">SGN</Typography>
                <Typography variant="body1">Điểm đến</Typography>
                <Typography variant="h5">17:00</Typography>
                <Typography variant="body1">24/03/2024</Typography>
              </div>
            </Paper>
          </AccordionSummary>

          {/* AccordionDetails chứa thông tin chi tiết */}
          <AccordionDetails>
            <div>
              <Typography variant="h5" align="center">Chi tiết lượt về</Typography>
            </div>
            <Paper className="grid grid-cols-2 justify-between mx-auto w-4/5 mb-6 px-12 p-2">
              <div>
                <Typography>Tổng hành khách: 2</Typography>
              </div>
              <div>
                <Typography>Vé thương gia: 5.000.000 VND</Typography>
              </div>
              <div>
                <Typography>Hoàn vé: Được phép</Typography>
              </div>
              <div>
                <Typography>Hành lý ký gửi: 15.5 kg</Typography>
              </div>
              <div>
                <Typography>Ghế đã chọn: E5, E6</Typography>
              </div>
              <div>
                <Typography>Hành lý xách tay: 5kg</Typography>
              </div>
            </Paper>
          </AccordionDetails>
        </Accordion>
      </div>
      <div>
      <Paper elevation={3} className="grid grid-cols-2 justify-between mx-auto w-3/4 mb-6 px-8 p-2 gap-x-4">
              <div>
                <Typography>Tổng hành khách: 2</Typography>
              </div>
              <div>
                <Typography>Vé thương gia: 5.000.000 VND</Typography>
              </div>
              <div>
                <Typography>Hoàn vé: Được phép</Typography>
              </div>
              <div>
                <Typography>Hành lý ký gửi: 15.5 kg</Typography>
              </div>
              <div>
                <Typography>Ghế đã chọn: E5, E6</Typography>
              </div>
              <div>
                <Typography>Hành lý xách tay: 5kg</Typography>
              </div>
              <div className="col-span-2 justify-items-center mt-3">
                <Typography variant="h5">Thanh toán: 10.000.000 VND</Typography>
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
