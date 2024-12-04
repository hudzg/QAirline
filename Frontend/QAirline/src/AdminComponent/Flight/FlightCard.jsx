import { Typography, Paper, Button, Divider } from "@mui/material";
import DoubleArrowIcon from "@mui/icons-material/DoubleArrow";
import FlightIcon from "@mui/icons-material/Flight";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";

const FlightCard = ({ flightInfo }) => {
  return (
    <div className="mt-2">
      <Paper elevation={6} className="mb-3 p-3">
        <div>
          <Typography>Mã chuyến bay: {flightInfo.id}</Typography>
        </div>
        <Divider />
        <div className="grid grid-cols-4 justify-between items-center mt-2">
          {/* thông tin khởi hành */}
          <div className="col-span-1">
            <Typography variant="caption" color="textSecondary">
              Khởi hành
            </Typography>
            <Typography>{flightInfo.departureAirport}</Typography>
            <Typography>{flightInfo.departureTime}</Typography>
          </div>
          {/* mấy cái icons */}
          <div className="col-span-2 flex justify-between items-center">
              <FlightIcon
                fontSize="large"
                sx={{ transform: "rotate(90deg)" }}
              />
              <div className="flex-grow border-t border-dashed border-black" />
              <FiberManualRecordIcon fontSize="small" />
          </div>
          {/* thông tin điểm đến */}
          <div className="col-span-1 text-right">
            <Typography variant="caption" color="textSecondary">
              Điểm đến
            </Typography>
            <Typography>{flightInfo.arrivalAirport}</Typography>
            <Typography>{flightInfo.arrivalTime}</Typography>
          </div>
        </div>
      </Paper>
    </div>
  );
};

export default FlightCard;
