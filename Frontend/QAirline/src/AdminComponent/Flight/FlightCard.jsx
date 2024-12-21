import React, { useEffect } from "react";
import {
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Paper,
  Divider,
  Button,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import FlightIcon from "@mui/icons-material/Flight";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import FlightLeg from "./FlightLeg";
import Ticket from "./Ticket";
import { useDispatch, useSelector } from "react-redux";
import { deleteFlight } from "../../State/FlightAdmin/Action";
import DeleteIcon from "@mui/icons-material/Delete";

const FlightCard = ({ flightInfo }) => {
  const flight = useSelector((store) => store.flightAdmin);
  const jwt = localStorage.getItem("jwt");
  const dispatch = useDispatch();

  const departureName =
    flightInfo?.flightLegs?.[0]?.departureAirport?.name || "N/A";
  const arrivalName =
    flightInfo?.flightLegs?.[flightInfo.flightLegs.length - 1]?.arrivalAirport
      ?.name || "N/A";
  const departureTime = flightInfo.flightLegs[0]?.departureTime || "N/A";

  const arrivalTime =
    flightInfo.flightLegs[flightInfo.flightLegs.length - 1]?.arrivalTime ||
    "N/A";

  return (
    <div className="mt-2">
      <Accordion elevation={6}>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Paper elevation={0} className="p-3 w-full">
            <div className="flex justify-between">
              <Typography>Mã chuyến bay: {flightInfo.id}</Typography>
              <DeleteIcon
                onClick={() => {
                  dispatch(deleteFlight({flightId: flightInfo.id, jwt})); 
                }}
                sx={{ color: "gray  " }}
              />
            </div>
            <Divider />
            <div className="grid grid-cols-4 justify-between items-center mt-2">
              {/* Thông tin khởi hành */}
              <div className="col-span-1">
                <Typography variant="caption" color="textSecondary">
                  Khởi hành
                </Typography>
                <Typography>{departureName}</Typography>
                <Typography>{departureTime}</Typography>
              </div>
              {/* Các icons */}
              <div className="col-span-2 flex justify-between items-center">
                <FlightIcon
                  fontSize="large"
                  sx={{ transform: "rotate(90deg)", color: "#B993D6" }}
                />
                <div className="flex-grow border-t border-dashed border-black" />
                <FiberManualRecordIcon
                  fontSize="small"
                  sx={{ color: "#8CA6DB" }}
                />
              </div>
              {/* Thông tin điểm đến */}
              <div className="col-span-1 text-right">
                <Typography variant="caption" color="textSecondary">
                  Điểm đến
                </Typography>
                <Typography>{arrivalName}</Typography>
                <Typography>{arrivalTime}</Typography>
              </div>
            </div>
          </Paper>
        </AccordionSummary>
        {/* hiển thị chi tiết */}
        <AccordionDetails>
          <Typography variant="h5" align="center" gutterBottom>
            chặng bay
          </Typography>
          <FlightLeg legsInfo={flightInfo.flightLegs} />
          <Typography variant="h5" align="center" gutterBottom>
            vé
          </Typography>
          <Ticket ticketsInfo={flightInfo.tickets} />
        </AccordionDetails>
      </Accordion>
    </div>
  );
};

export default FlightCard;
