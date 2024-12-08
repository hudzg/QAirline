import { Typography, Paper, Button, Divider } from "@mui/material";
import DoubleArrowIcon from "@mui/icons-material/DoubleArrow";
import FlightIcon from "@mui/icons-material/Flight";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";

const FlightCard = ({ flightInfo, navToDetail}) => {
  // console.log("This is flight card", flightInfo);
  return (
    <div className="mt-2">
      <Paper elevation={6} className="mb-3 p-3">
        <div className="flex justify-between">
          <Typography>Mã chuyến bay: {flightInfo.id}</Typography>
          <Button onClick={navToDetail}>Xem chi tiết</Button>
        </div>
        <Divider />
        <div className="grid grid-cols-4 justify-between items-center mt-2">
          {/* thông tin khởi hành */}
          <div className="col-span-1">
            <Typography variant="caption" color="textSecondary">
              Khởi hành
            </Typography>
            <Typography>{flightInfo.flightLegs[0].departureAirport.name}</Typography>
            <Typography>{flightInfo.flightLegs[0].departureTime}</Typography>
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
            <Typography>{flightInfo.flightLegs[0].arrivalAirport.name}</Typography>
            <Typography>{flightInfo.flightLegs[0].arrivalTime}</Typography>
          </div>
        </div>
      </Paper>
    </div>
  );
};

export default FlightCard;
