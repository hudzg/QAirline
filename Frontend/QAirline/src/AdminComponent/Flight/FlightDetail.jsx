import { Typography } from "@mui/material";
import FlightLeg from "./FlightLeg";

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
  return (
    <div className="w-[90%] justify-self-center bg-indigo-50 mt-5">
      <div>
        <Typography variant="h4" textAlign={"center"} gutterBottom>Chuyến bay: 12345</Typography>
      </div>
      <div className="grid grid-cols-2 p-2 gap-2">
        <div className="bg-gray-400 p-1">
          <Typography variant="h5" textAlign={"center"} gutterBottom>{legsInfo.length} chặng bay</Typography>
          {legsInfo.map((leg, index) => (
            <FlightLeg key={index} legInfo = {leg}/>
          ))}
        </div>
        <div className="bg-orange-300">
          this is flight ticket
        </div>
      </div>
      
    </div>
  );
};

export default FlightDetail;