import { Button } from "@mui/material";
import React, { useState } from "react";
import AddFlightTicket from "./AddFlightTicket";
import AddFlightLeg from "./AddFlightLeg";

const AddFlight = () => {
  const airportOptions = [
    "Tân Sơn Nhất",
    "Nội Bài",
    "Đà Nẵng",
    "Phú Quốc",
    "Cam Ranh",
  ];

  const airplaneOptions = [
    "Airbus A320",
    "Boeing 737",
    "Airbus A321",
    "Boeing 777",
  ];

  const [ticketData, setTicketData] = useState({
    FIRST_CLASS: {
      amount: 0,
      price: 0,
      refund: false,
      checkedBaggage: 0.0,
      carryOnBaggage: 0.0,
    },
    BUSINESS_CLASS: {
      amount: 0,
      price: 0,
      refund: false,
      checkedBaggage: 0.0,
      carryOnBaggage: 0.0,
    },
    ECONOMY_CLASS: {
      amount: 0,
      price: 0,
      refund: false,
      checkedBaggage: 0.0,
      carryOnBaggage: 0.0,
    },
  });

  const handleInputChangeTicket = (e, className) => {
    const { name, value } = e.target;
    setTicketData({
      ...ticketData,
      [className]: {
        ...ticketData[className],
        [name]: value,
      },
    });
  };

  const handleRefundChange = (e, className) => {
    const { value } = e.target;
    const refundValue = value === "Có" ? true : false;
    setTicketData({
      ...ticketData,
      [className]: {
        ...ticketData[className],
        refund: refundValue,
      },
    });
  };

  const [legData, setLegData] = useState([
    {
      departureAirport: "",
      arrivalAirport: "",
      departureTime: "",
      arrivalTime: "",
      airplane: "",
    },
  ]);

  const handleInputChangeLeg = (e, index) => {
    const { name, value } = e.target;
    const updatedLegData = [...legData];
    updatedLegData[index] = {
      ...updatedLegData[index],
      [name]: value,
    };
    setLegData(updatedLegData);
  };

  const handleSubmit = () => {
    console.log("Thông tin các loại vé: ", ticketData);
    console.log("Thông tin các chặng bay: ", legData);
  };

  return (
    <div className="w-[60vw] justify-self-center m-5">
      {/* bảng thêm chặng bay */}
      <div className="mb-10">
        <AddFlightLeg
          legData={legData}
          setLegData={setLegData}
          handleInputChangeLeg={handleInputChangeLeg}
          airportOptions={airportOptions}
          airplaneOptions={airplaneOptions}
        />
      </div>
      {/* bảng thêm vé */}
      <div>
        <AddFlightTicket
          ticketData={ticketData}
          handleInputChangeTicket={handleInputChangeTicket}
          handleRefundChange={handleRefundChange}
        />
      </div>

      <div className="flex justify-center mt-5">
        <Button
          variant="contained"
          type="submit"
          onClick={handleSubmit}
          sx={{
            background: "linear-gradient(to right, #B993D6, #8CA6DB)",
          }}
        >
          Lưu
        </Button>
      </div>
    </div>
  );
};

export default AddFlight;
