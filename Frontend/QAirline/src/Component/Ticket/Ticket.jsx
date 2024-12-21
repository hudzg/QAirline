import {
  Card,
  Paper,
  Typography,
  Divider,
  Box,
  TextField,
  Button,
} from "@mui/material";
import DoubleArrowIcon from "@mui/icons-material/DoubleArrow";
import AirplaneTicketIcon from "@mui/icons-material/AirplaneTicket";
import { useDispatch } from "react-redux";
import React, { useEffect } from "react";
import { deleteSeatByUserAndFlightInstance } from "../../State/Seat/Action";

const InfoField = ({ label, value }) => (
  <div>
    <Typography variant="caption" color="textSecondary">
      {label}
    </Typography>
    <Typography variant="body1">{value}</Typography>
  </div>
);

const flightClass = {
  ECONOMY_CLASS: { label: "Hạng phổ thông", color: "#B993D6" },
  BUSINESS_CLASS: { label: "Hạng thương gia", color: "#A2A6DB" },
  FIRST_CLASS: { label: "Hạng nhất", color: "#8CA6DB" },
};

const Ticket = ({ seat }) => {
console.log(seat.ticket);
  return (
    <div className="mb-5 flex w-full bg-indigo-100">
      <div className="w-full">
        <Paper elevation={6} className="flex">
          <div className="flex-grow-[4] p-2">
            <div
              className={`flex justify-center mb-2`}
              style={{
                "background-color": flightClass[seat.ticket.ticketClass].color,
              }}
            >
              <Typography variant="h4" color="primary.contrastText">
                {flightClass[seat.ticket.ticketClass].label}
              </Typography>
            </div>
            <Divider />
            <div className="flex items-center justify-between">
              <div>
                <InfoField
                  label={"Mã chuyến bay"}
                  value={seat.flightInstance.id}
                />
              </div>
              <div className="flex items-center space-x-2">
                <div className="text-center">
                  <InfoField
                    label={"Khởi hành"}
                    value={seat.flightLegs[0].departureAirport.city}
                  />
                </div>
                <DoubleArrowIcon />
                <div className="text-center">
                  <InfoField
                    label={"Điểm đến"}
                    value={seat.flightLegs[0].arrivalAirport.city}
                  />
                </div>
              </div>
            </div>
            <div>
              <div>
                <InfoField
                  label={"Giờ khởi hành"}
                  value={seat.flightLegs[0].departureTime.substring(0, 5)}
                />
              </div>
              <div>
                <InfoField
                  label={"Giờ hạ cánh(dự kiến)"}
                  value={seat.flightLegs[0].arrivalTime.substring(0, 5)}
                />
              </div>
            </div>
            <div>
              <InfoField
                label={"Hành khách"}
                value={seat.firstName + " " + seat.lastName}
              />
            </div>
          </div>

          <Divider orientation="vertical" flexItem />

          <Box
            className="flex-grow-0"
            sx={{
              flexBasis: "20%",
              background: "linear-gradient(to right, #B993D6, #8CA6DB)",
              color: "white",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              textAlign: "center",
              padding: 1,
            }}
          >
            <Typography variant="h5">QAirline</Typography>
            <AirplaneTicketIcon
              sx={{
                fontSize: 100,
              }}
            />
            <Typography variant="body2" className="break-words">
              Cảm ơn bạn đã lựa chọn chúng tôi.
            </Typography>
          </Box>
        </Paper>
      </div>

      {/* <div>
        <Button
          type="submit"
          variant="contained"
          onClick={handleDeleteTicket(seat.id)}
          sx={{
            background: "linear-gradient(to right, #B993D6, #8CA6DB)",
          }}
        >
          Hủy
        </Button>
      </div> */}
    </div>
  );
};

export default Ticket;
