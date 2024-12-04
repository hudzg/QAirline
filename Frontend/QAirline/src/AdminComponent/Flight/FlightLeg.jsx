import { Paper, Typography } from "@mui/material";
import DoubleArrowIcon from "@mui/icons-material/DoubleArrow";


const FlightLeg = ({ legInfo }) => {
  return (
    <div className="relative">
      <Paper elevation={6} className="flex mb-3 justify-between items-center relative p-1">
        <div>
          <Typography>Máy bay: {legInfo.airplane}</Typography>
          <Typography variant="caption" color="textSecondary">
            Khởi hành
          </Typography>
          <Typography>{legInfo.departureAirport}</Typography>
          <Typography>{legInfo.departureTime}</Typography>
        </div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <DoubleArrowIcon />
        </div>
        <div className="text-right">
        <Typography variant="caption" color="textSecondary">
            Điểm đến
          </Typography>
          <Typography>{legInfo.arrivalAirport}</Typography>
          <Typography>{legInfo.arrivalTime}</Typography>
        </div>
      </Paper>
    </div>
  );
};

export default FlightLeg;
