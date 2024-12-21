import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Paper,
  Typography,
} from "@mui/material";
import React from "react";
import FlightIcon from "@mui/icons-material/Flight";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const flightClass = {
  ECONOMY_CLASS: { label: "Phổ thông", color: "#B993D6" },
  BUSINESS_CLASS: { label: "Thương gia", color: "#A2A6DB" },
  FIRST_CLASS: { label: "Hạng nhất", color: "#8CA6DB" },
};

const FlightPreview = ({ flight, seat }) => {
  return (
    <div>
      <Accordion elevation={6} sx={{}}>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Paper
            elevation={0}
            className="grid grid-cols-3 items-center justify-items-center h-28 mb-6 w-full"
          >
            <div>
              <Typography variant="h4">
                {flight.flight.departureAirport.iata}
              </Typography>
              <Typography variant="body1">Khởi hành</Typography>
              <Typography variant="h5">
                {flight.flightInstance.departureTime.substring(0, 5)}
              </Typography>
              {/* <Typography variant="body1">
                  {flight.flight.departureTime}
                </Typography> */}
            </div>
            <div className="flex-col flex items-center">
              <FlightIcon
                fontSize="large"
                sx={{ transform: "rotate(90deg)" }}
              />
              <Typography
                align="center"
                variant="body2"
                sx={{ color: "text.secondary" }}
              >
                {flight.flightInstance.hourDuration} giờ{" "}
                {flight.flightInstance.minuteDuration} phút
              </Typography>
            </div>
            <div>
              <Typography variant="h4">
                {flight.flight.arrivalAirport.iata}
              </Typography>
              <Typography variant="body1">Điểm đến</Typography>
              <Typography variant="h5">
                {flight.flightInstance.arrivalTime.substring(0, 5)}
              </Typography>
              {/* <Typography variant="body1">
                  {flight.flight.arrivalTime}
                </Typography> */}
            </div>
          </Paper>
        </AccordionSummary>

        {/* AccordionDetails chứa thông tin chi tiết */}
        <AccordionDetails>
          <div>
            <Typography variant="h5" align="center">
              Chi tiết lượt đi
            </Typography>
          </div>
          <Paper className="grid grid-cols-2 justify-between mx-auto w-4/5  mb-6 px-12 p-2">
            <div>
              <Typography>
                Tổng hành khách: {flight.flight.numPassenger}
              </Typography>
            </div>
            <div>
              <Typography>
                Vé {flightClass[flight.ticket.ticketClass].label}:{" "}
                {flight.ticket.price} VND
              </Typography>
            </div>
            <div>
              <Typography>
                Hoàn vé:{" "}
                {flight.ticket.refund ? "Được phép" : "Không được phép"}
              </Typography>
            </div>
            <div>
              <Typography>
                Hành lý ký gửi: {flight.ticket.checkedBaggage} kg
              </Typography>
            </div>
            <div>
              <Typography>
                Ghế đã chọn: {seat.map((item) => item + " ")}
              </Typography>
            </div>
            <div>
              <Typography>
                Hành lý xách tay: {flight.ticket.carryOnBaggage} kg
              </Typography>
            </div>
          </Paper>
        </AccordionDetails>
      </Accordion>
    </div>
  );
};

export default FlightPreview;
