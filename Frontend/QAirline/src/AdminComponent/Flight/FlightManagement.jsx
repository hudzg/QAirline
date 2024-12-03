import { Typography, Button } from "@mui/material";
import FlightCard from "./FlightCard";
import AddIcon from "@mui/icons-material/Add";

const FlightMAnagement = () => {
  const flightsInfo = [
    {
      id: 12345,
      weekdays: 2,
      departureAirport: "Nội Bài",
      arrivalAirport: "Tân Sơn Nhất",
      departureTime: "12:00",
      arrivalTime: "16:00",
      airplane: "boeing 777",
    },
    {
      id: 12346,
      weekdays: 2,
      departureAirport: "Tân Sơn Nhất",
      arrivalAirport: "Nội Bài",
      departureTime: "12:00",
      arrivalTime: "16:00",
      airplane: "boeing 777",
    },
    {
      id: 12347,
      weekdays: 2,
      departureAirport: "Nội Bài",
      arrivalAirport: "Tân Sơn Nhất",
      departureTime: "12:00",
      arrivalTime: "17:00",
      airplane: "boeing 777",
    },
  ];
  return (
    <div className="w-[60%] justify-self-center mt-5">
      <div className="flex justify-between mb-4">
        <Typography variant="h4" gutterBottom>
          Quản lý chuyến bay
        </Typography>
        <Button
          sx={{
            background: "linear-gradient(to right, #B993D6, #8CA6DB)",
          }}
          // className="mt-5"
          variant="contained"
          startIcon={<AddIcon />}
        >
          Thêm chuyến bay
        </Button>
      </div>

      {flightsInfo.map((flight) => (
        <FlightCard key={flight.id} flightInfo={flight} />
      ))}
    </div>
  );
};

export default FlightMAnagement;
