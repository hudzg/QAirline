import { Divider, Paper, Typography } from "@mui/material";
import DoubleArrowIcon from "@mui/icons-material/DoubleArrow";

const FlightLeg = ({ legsInfo }) => {
  console.log("this is leg info ", legsInfo);
  return (
    <div className="relative">
      {legsInfo.map((leg, index) => (
        <Paper key={index} elevation={6} className="mb-3 p-2">
          <div className="flex justify-between">
            <Typography>Chặng: {index + 1}</Typography>
            <Typography>Máy bay: {leg.airplane.model}</Typography>
          </div>

          <Divider />
          <div className="flex justify-between items-center relative ">
            {/* thông tin khởi hành */}
            <div>
              <Typography variant="caption" color="textSecondary">
                Khởi hành
              </Typography>
              <Typography>{leg.departureAirport.name}({leg.departureAirport.city}), {leg.departureAirport.country}</Typography>
              <Typography>{leg.departureTime}</Typography>
            </div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <DoubleArrowIcon />
            </div>
            {/* thông tin điểm đến */}
            <div className="text-right">
              <Typography variant="caption" color="textSecondary">
                Điểm đến
              </Typography>
              <Typography>{leg.arrivalAirport.name}({leg.arrivalAirport.city}), {leg.arrivalAirport.country}</Typography>
              <Typography>{leg.arrivalTime}</Typography>
            </div>
          </div>
        </Paper>
      ))}
    </div>
  );
};

export default FlightLeg;
