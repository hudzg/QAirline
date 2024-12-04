import { Divider, Paper, Typography } from "@mui/material";
import DoubleArrowIcon from "@mui/icons-material/DoubleArrow";

const FlightLeg = ({ legInfo }) => {
  return (
    <div className="relative">
      <Paper elevation={6} className="mb-3 p-1">
        <div>
          <Typography>Máy bay: {legInfo.airplane}</Typography>
        </div>
        <Divider />
        <div className="flex justify-between items-center relative ">
          {/* thông tin khởi hành */}
          <div>
            <Typography variant="caption" color="textSecondary">
              Khởi hành
            </Typography>
            <Typography>{legInfo.departureAirport}</Typography>
            <Typography>{legInfo.departureTime}</Typography>
          </div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <DoubleArrowIcon />
          </div>
          {/* thông tin điểm đến */}
          <div className="text-right">
            <Typography variant="caption" color="textSecondary">
              Điểm đến
            </Typography>
            <Typography>{legInfo.arrivalAirport}</Typography>
            <Typography>{legInfo.arrivalTime}</Typography>
          </div>
        </div>
      </Paper>
    </div>
  );
};

export default FlightLeg;
