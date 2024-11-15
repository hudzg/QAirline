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

const BookingCard = () => {
  return (
    <div className="flex mb-5">
      <div className="w-[40%]">
        <Card className="grid grid-cols-3 items-center justify-items-center h-32">
          <div>
            <Typography>HAN</Typography>
            <Typography variant="h5">17:00</Typography>
          </div>
          <div className="flex-col flex items-center">
            <FlightIcon fontSize="large" sx={{ transform: "rotate(90deg)" }} />
            <Typography
              align="center"
              variant="body2"
              sx={{ color: "text.secondary" }}
            >
              20 giờ 20 phút
            </Typography>
          </div>
          <div>
            <Typography>SGN</Typography>
            <Typography variant="h5">17:00</Typography>
          </div>
        </Card>
      </div>
      <div className="w-[60%] flex self-center">
        <div className="w-[100%]">
          <Typography
            sx={{
              // background: "linear-gradient(to right, #B993D6, #8CA6DB)",
              backgroundColor: "#B993D6",
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
                  color={"#B993D6"}
                >
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
              <div className="w-[100%] space-y-2">
                <div className="flex space-x-2">
                  <AirplaneTicketIcon />
                  <div>
                    <Typography>Hoàn vé</Typography>
                    <Typography
                      variant="body2"
                      sx={{ color: "text.secondary" }}
                    >
                      Không được phép
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
                      23 kg
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
                      12 kg
                    </Typography>
                  </div>
                </div>
                <Button
                  fullWidth
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
          <Typography
            sx={{
              // background: "linear-gradient(to right, #B993D6, #8CA6DB)",
              backgroundColor: "#A2A6DB",
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
                  color={"#A2A6DB"}
                >
                  Thương gia
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
              <div className="w-[100%] space-y-2">
                <div className="flex space-x-2">
                  <AirplaneTicketIcon />
                  <div>
                    <Typography>Hoàn vé</Typography>
                    <Typography
                      variant="body2"
                      sx={{ color: "text.secondary" }}
                    >
                      Không được phép
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
                      23 kg
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
                      12 kg
                    </Typography>
                  </div>
                </div>
                <Button
                  fullWidth
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
          <Typography
            sx={{
              // background: "linear-gradient(to right, #B993D6, #8CA6DB)",
              backgroundColor: "#8CA6DB",
              height: "0.5rem",
            }}
          ></Typography>
          <Accordion className="w-[100%]" disabled={false}>
            {/* <Accordion className="w-[100%]"> */}
            <AccordionSummary
              className="w-[100%]"
              expandIcon={<ArrowDropDownIcon />}
            >
              <div className="w-[100%]">
                <Typography
                  align="center"
                  variant="h5"
                  gutterBottom
                  color={"#8CA6DB"}
                >
                  Hạng nhất
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
              <div className="w-[100%] space-y-2">
                <div className="flex space-x-2">
                  <AirplaneTicketIcon />
                  <div>
                    <Typography>Hoàn vé</Typography>
                    <Typography
                      variant="body2"
                      sx={{ color: "text.secondary" }}
                    >
                      Không được phép
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
                      23 kg
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
                      12 kg
                    </Typography>
                  </div>
                </div>
                <Button
                  fullWidth
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
