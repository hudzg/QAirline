import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Button,
  Card,
  Typography,
} from "@mui/material";
import React from "react";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import AirplaneTicketIcon from "@mui/icons-material/AirplaneTicket";
import WorkIcon from "@mui/icons-material/Work";
import LuggageIcon from "@mui/icons-material/Luggage";
import FlightIcon from "@mui/icons-material/Flight";
import { useDispatch, useSelector } from "react-redux";
import { addSelectedInboundFlight } from "../../State/Flight/Action";
import { useNavigate } from "react-router-dom";

const flightClass = {
  ECONOMY_CLASS: { label: "Phổ thông", color: "#B993D6" },
  BUSINESS_CLASS: { label: "Thương gia", color: "#A2A6DB" },
  FIRST_CLASS: { label: "Hạng nhất", color: "#8CA6DB" },
};

const BookingCardInbound = ({ item }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const flight = useSelector((store) => store.flight.getInboundFlightReq);

  const handleOnClick = (flightInstance, ticket) => {
    // console.log(flightInstance, ticket, flight);
    const reqData = { flightInstance, ticket, flight };
    console.log(reqData);
    dispatch(addSelectedInboundFlight(reqData));
    navigate("/info");
  };

  return (
    <div className="flex mb-5">
      <div className="w-[40%]">
        <Card className="grid grid-cols-3 items-center justify-items-center h-32">
          <div>
            <Typography>{flight.departureAirport.iata}</Typography>
            <Typography variant="h5">
              {item.departureTime.substring(0, 5)}
            </Typography>
          </div>
          <div className="flex-col flex items-center">
            <FlightIcon fontSize="large" sx={{ transform: "rotate(90deg)" }} />
            <Typography
              align="center"
              variant="body2"
              sx={{ color: "text.secondary" }}
            >
              {item.hourDuration} giờ {item.minuteDuration} phút
            </Typography>
          </div>
          <div>
            <Typography>{flight.arrivalAirport.iata}</Typography>
            <Typography variant="h5">
              {item.arrivalTime.substring(0, 5)}
            </Typography>
          </div>
        </Card>
      </div>
      <div className="w-[60%] flex self-center">
        {item.tickets.map((ticket) => (
          <div
            className="w-[100%]"
            key={item.flightId + "" + ticket.ticketClass}
          >
            <Typography
              sx={{
                // background: "linear-gradient(to right, #B993D6, #8CA6DB)",
                backgroundColor: flightClass[ticket.ticketClass].color,
                height: "0.5rem",
              }}
            ></Typography>
            <Accordion className="w-[100%]">
              <AccordionSummary
                className="w-[100%]"
                expandIcon={<ArrowDropDownIcon />}
              >
                <div className="w-[100%]">
                  <Typography
                    align="center"
                    variant="h5"
                    gutterBottom
                    color={flightClass[ticket.ticketClass].color}
                  >
                    {flightClass[ticket.ticketClass].label}
                  </Typography>
                  <Typography align="center" gutterBottom>
                    {ticket.price} VND
                  </Typography>
                  <Typography
                    align="center"
                    variant="body2"
                    sx={{ color: "text.secondary" }}
                  >
                    {ticket.amount} ghế trống
                  </Typography>
                </div>
              </AccordionSummary>
              <AccordionDetails>
                <div className="w-[100%] space-y-2">
                  <div className="flex space-x-2">
                    <AirplaneTicketIcon />
                    <div>
                      <Typography>Hoàn vé</Typography>
                      <Typography
                        variant="body2"
                        sx={{ color: "text.secondary" }}
                      >
                        {ticket.refund ? "Được phép" : "Không được phép"}
                      </Typography>
                    </div>
                  </div>
                  <div className="flex space-x-2">
                    <LuggageIcon />
                    <div>
                      <Typography>Hành lý ký gửi</Typography>
                      <Typography
                        variant="body2"
                        sx={{ color: "text.secondary" }}
                      >
                        {ticket.checkedBaggage} kg
                      </Typography>
                    </div>
                  </div>
                  <div className="flex space-x-2">
                    <WorkIcon />
                    <div>
                      <Typography>Hành lý xách tay</Typography>
                      <Typography
                        variant="body2"
                        sx={{ color: "text.secondary" }}
                      >
                        {ticket.carryOnBaggage} kg
                      </Typography>
                    </div>
                  </div>
                  <Button
                    fullWidth
                    variant="outlined"
                    onClick={() => handleOnClick(item, ticket)}
                  >
                    Chọn
                  </Button>
                </div>
              </AccordionDetails>
            </Accordion>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BookingCardInbound;
