import { Button } from "@mui/material";
import React, { useState } from "react";
import AddTicket from "./AddTicket";
import AddFlightLeg from "./AddFlightLeg";

const AddTicketAndLeg = () => {
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
      airplane: "Boeing 777",
    },
    {
      departureAirport: "",
      arrivalAirport: "",
      departureTime: "",
      arrivalTime: "",
      airplane: "Boeing 778",
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
          handleInputChangeLeg={handleInputChangeLeg}
        />
      </div>
      {/* bảng thêm vé */}
      <div>
        <AddTicket
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

export default AddTicketAndLeg;
