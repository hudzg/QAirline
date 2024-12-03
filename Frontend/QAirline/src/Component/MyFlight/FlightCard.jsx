import React from "react";
import { Typography, Paper, Divider, Button } from "@mui/material";
import FlightIcon from "@mui/icons-material/Flight";
import VisibilityIcon from "@mui/icons-material/Visibility";
import CancelIcon from "@mui/icons-material/Cancel";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";

const FlightCard = ({ flightInstance }) => {
  return (
    <div className="flex">
      <Paper className="mt-5 mb-5 mr-3 p-3 w-[90%]">
        <div className="flex justify-between">
          <Typography variant="h5">{`${flightInstance.departureAirport.city} (${flightInstance.departureAirport.iata}), ${flightInstance.departureAirport.country}`}</Typography>
          <Typography variant="h5">{`${flightInstance.arrivalAirport.city} (${flightInstance.arrivalAirport.iata}), ${flightInstance.arrivalAirport.country}`}</Typography>
        </div>
        <Divider />
        <div className="grid grid-cols-9 mt-1">
          {/* khởi hành */}
          <div className="col-span-2">
            <Typography variant="body2">Khởi hành</Typography>
            <Typography variant="h5">
              {flightInstance.departureTime.substring(0, 5)}
            </Typography>
            <Typography variant="body2">
              {flightInstance.flightInstance.date}
            </Typography>
          </div>
          {/* icon gì đó */}
          <div className="col-span-5 flex justify-between items-center">
            <FlightIcon fontSize="large" sx={{ transform: "rotate(90deg)" }} />
            {/* <Divider/> */}
            <div className="flex-grow border-t border-dashed border-black" />
            <FiberManualRecordIcon fontSize="small" />
          </div>
          {/* điểm đến */}
          <div className="col-span-2 text-right">
            <Typography variant="body2">Điểm đến</Typography>
            <Typography variant="h5">
              {flightInstance.arrivalTime.substring(0, 5)}
            </Typography>
            <Typography variant="body2">
              {flightInstance.flightInstance.date}
            </Typography>
          </div>
        </div>
      </Paper>
      <div className=" mt-5 w-[10%] space-y-3">
        <Button
          sx={{
            background: "linear-gradient(to right, #B993D6, #8CA6DB)",
          }}
          variant="contained"
          // startIcon={<VisibilityIcon />}
          className="w-[100%]"
        >
          Xem
        </Button>
        <Button
          sx={{
            background: "linear-gradient(to right, #B993D6, #8CA6DB)",
          }}
          variant="contained"
          // startIcon={<CancelIcon />}
          className="w-[100%]"
        >
          Hủy
        </Button>
      </div>
    </div>
  );
};

export default FlightCard;
