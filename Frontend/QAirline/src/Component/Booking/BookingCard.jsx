import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Button,
  Typography,
} from "@mui/material";
import React from "react";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import AirplaneTicketIcon from "@mui/icons-material/AirplaneTicket";
import WorkIcon from "@mui/icons-material/Work";
import LuggageIcon from "@mui/icons-material/Luggage";

const BookingCard = () => {
  return (
    <div className="flex mb-5">
      <div className="w-[40%] flex justify-between">
        <div>
          <Typography variant="h6">Hà Nội</Typography>
          <Typography variant="h5">17:00</Typography>
        </div>
        <div>
          <Typography variant="h6">TP. Hồ Chí Minh</Typography>
          <Typography variant="h5">17:00</Typography>
        </div>
      </div>
      <div className="w-[60%] flex">
        <div className="w-[100%]">
          <Accordion className="w-[100%]">
            <AccordionSummary
              className="w-[100%]"
              expandIcon={<ArrowDropDownIcon />}
            >
              <div className="w-[100%]">
                <Typography align="center" variant="h5" gutterBottom>
                  Phổ thông
                </Typography>
                <Typography align="center" gutterBottom>
                  5.000.000 VND
                </Typography>
                <Typography
                  align="center"
                  variant="body2"
                  sx={{ color: "text.secondary" }}
                >
                  44 ghế trống
                </Typography>
              </div>
            </AccordionSummary>
            <AccordionDetails>
              <div className="flex justify-around w-[100%]">
                <Typography></Typography>
                <Button
                  variant="outlined"
                  // sx={{
                  //   // p: "1rem",
                  //   background: "linear-gradient(to right, #B993D6, #8CA6DB)",
                  // }}
                >
                  Chọn
                </Button>
              </div>
            </AccordionDetails>
          </Accordion>
        </div>
        <div className="w-[100%]">
          <Accordion className="w-[100%]">
            <AccordionSummary
              className="w-[100%]"
              expandIcon={<ArrowDropDownIcon />}
            >
              <div className="w-[100%]">
                <Typography align="center" variant="h5" gutterBottom>
                  Phổ thông
                </Typography>
                <Typography align="center" gutterBottom>
                  5.000.000 VND
                </Typography>
                <Typography
                  align="center"
                  variant="body2"
                  sx={{ color: "text.secondary" }}
                >
                  44 ghế trống
                </Typography>
              </div>
            </AccordionSummary>
            <AccordionDetails>
              <div className="flex justify-around w-[100%]">
                <Button
                  variant="outlined"
                  // sx={{
                  //   // p: "1rem",
                  //   background: "linear-gradient(to right, #B993D6, #8CA6DB)",
                  // }}
                >
                  Chọn
                </Button>
              </div>
            </AccordionDetails>
          </Accordion>
        </div>
        <div className="w-[100%]">
          <Accordion className="w-[100%]">
            <AccordionSummary
              className="w-[100%]"
              expandIcon={<ArrowDropDownIcon />}
            >
              <div className="w-[100%]">
                <Typography align="center" variant="h5" gutterBottom>
                  Phổ thông
                </Typography>
                <Typography align="center" gutterBottom>
                  5.000.000 VND
                </Typography>
                <Typography
                  align="center"
                  variant="body2"
                  sx={{ color: "text.secondary" }}
                >
                  44 ghế trống
                </Typography>
              </div>
            </AccordionSummary>
            <AccordionDetails>
              <div className="flex justify-around w-[100%]">
                <Button
                  variant="outlined"
                  // sx={{
                  //   // p: "1rem",
                  //   background: "linear-gradient(to right, #B993D6, #8CA6DB)",
                  // }}
                >
                  Chọn
                </Button>
              </div>
            </AccordionDetails>
          </Accordion>
        </div>
      </div>
    </div>
  );
};

export default BookingCard;
