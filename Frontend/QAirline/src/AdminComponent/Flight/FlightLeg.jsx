import { Paper, Typography } from "@mui/material";
import DoubleArrowIcon from "@mui/icons-material/DoubleArrow";


const FlightLeg = ({ legInfo }) => {
  // let weekdaysVIE;
  // switch (legInfo.weekdays) {
  //   case 2:
  //     weekdaysVIE = "Thứ hai";
  //     break;
  //   case 3:
  //     weekdaysVIE = "Thứ ba";
  //     break;
  //   case 4:
  //     weekdaysVIE = "Thứ tư";
  //     break;
  //   case 5:
  //     weekdaysVIE = "Thứ năm";
  //     break;
  // }
  return (
    <div className="relative">
      <Paper className="flex mb-2 justify-between items-center relative">
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
