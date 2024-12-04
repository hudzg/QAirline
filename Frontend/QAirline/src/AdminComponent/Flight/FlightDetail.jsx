import { Typography, Button } from "@mui/material";
import FlightLeg from "./FlightLeg";
import Ticket from "./Ticket";

const FlightDetail = () => {
  const legsInfo = [
    {
      id: 12345,
      weekdays: 2,
      departureAirport: "Nội Bài",
      arrivalAirport: "Tân Sơn Nhất",
      departureTime: "12:00",
      arrivalTime: "16:00",
      airplane: "Boeing 777",
    },
    {
      id: 12345,
      weekdays: 2,
      departureAirport: "Tân Sơn Nhất",
      arrivalAirport: "Nội Bài",
      departureTime: "16:00",
      arrivalTime: "18:00",
      airplane: "Boeing 777",
    },
  ];

  const tickets = [
    {
      flightClass: "FIRST_CLASS",
      amount: 12,
      price: 2500000,
      refund: true,
      checkedBaggage: 25,
      carryOnBaggage: 10,
    },
    {
      flightClass: "BUSINESS_CLASS",
      amount: 20,
      price: 1000000,
      refund: true,
      checkedBaggage: 18,
      carryOnBaggage: 7,
    },
    {
      flightClass: "ECONOMY_CLASS",
      amount: 120,
      price: 500000,
      refund: true,
      checkedBaggage: 12,
      carryOnBaggage: 5,
    },
  ];
  return (
    <div className="w-[90%] justify-self-center bg-indigo-100 m-4 p-5">
      <div>
        <Typography variant="h4" textAlign={"center"} gutterBottom>
          Chuyến bay: 12345
        </Typography>
      </div>
      <div className="grid grid-cols-2 p-2 gap-2">
        <div className="p-1">
          <Typography variant="h5" textAlign={"center"} gutterBottom>
            {legsInfo.length} chặng bay
          </Typography>
          {legsInfo.map((leg, index) => (
            <FlightLeg key={index} legInfo={leg} />
          ))}
        </div>
        <div className="p-1">
          <Typography variant="h5" textAlign={"center"} gutterBottom>
            Các loại vé
          </Typography>
          {tickets.map((ticket, index) => (
            <Ticket key={index} ticketInfo={ticket} />
          ))}
        </div>
      </div>
      <div className="flex justify-center p-2">
        <Button
          sx={{
            background: "linear-gradient(to right, #B993D6, #8CA6DB)",
          }}
          className="mt-5"
          variant="contained"
        >
          Quay lại
        </Button>
      </div>
    </div>
  );
};

export default FlightDetail;
