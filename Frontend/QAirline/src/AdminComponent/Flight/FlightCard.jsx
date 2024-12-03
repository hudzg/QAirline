import { Typography, Paper, Button, Divider } from "@mui/material";
import DoubleArrowIcon from "@mui/icons-material/DoubleArrow";

const FlightCard = ({ flightInfo }) => {
  return (
    <div className="">
      <Paper elevation={6} className="mb-3 p-3">
        <div>
          <Typography>Mã chuyến bay: {flightInfo.id}</Typography>
        </div>
        <Divider/>
        <div className="flex justify-between items-center">
          <div>
            <Typography>{flightInfo.departureAirport}</Typography>
            <Typography>{flightInfo.departureTime}</Typography>
          </div>
          <div>
            <DoubleArrowIcon />
          </div>
          <div className="text-right">
            <Typography>{flightInfo.arrivalAirport}</Typography>
            <Typography>{flightInfo.arrivalTime}</Typography>
          </div>
        </div>
      </Paper>
      {/* <Button
        variant="contained"
        sx={{
          background: "linear-gradient(to right, #B993D6, #8CA6DB)",
        }}
      >
        Xóa
      </Button> */}
    </div>
  );
};

export default FlightCard;
