import React, { useState } from "react";
import { Typography, Button } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import dayjs from "dayjs";
import FlightCard from "./FlightCard";
import AddFlight from "./AddFlight";

const FlightManagement = () => {
  const [flightsInfo, setFlightsInfo] = useState([
    {
      id: 12345,
      weekdays: 2,
      departureAirport: "Nội Bài",
      arrivalAirport: "Tân Sơn Nhất",
      departureTime: dayjs().format("DD/MM/YYYY"),
      arrivalTime: dayjs().add(1, "day").format("DD/MM/YYYY"),
      airplane: "Boeing 777",
    },
    {
      id: 12346,
      weekdays: 2,
      departureAirport: "Tân Sơn Nhất",
      arrivalAirport: "Nội Bài",
      departureTime: dayjs().format("DD/MM/YYYY"),
      arrivalTime: dayjs().add(5, "day").format("DD/MM/YYYY"),
      airplane: "Boeing 777",
    },
  ]);

  return (
    <div className="w-[50vw] justify-self-center mx-auto m-4 p-5 bg-indigo-100">
      <div className="flex justify-between items-center">
        <Typography variant="h4">Quản lý chuyến bay</Typography>
        <div className="flex">
          <Button>
            <Typography color="textPrimary">Thêm chuyến bay </Typography>
            <AddIcon />
          </Button>
        </div>
      </div>

      {flightsInfo.map((flight) => (
        <FlightCard key={flight.id} flightInfo={flight} />
      ))}
    </div>
  );
};

export default FlightManagement;
