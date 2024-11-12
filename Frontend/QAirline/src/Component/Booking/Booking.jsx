import { Typography } from "@mui/material";
import React from "react";
import BookingCard from "./BookingCard";

const Booking = () => {
  return (
    <div className="w-[60vw] m-auto">
      <div className="mt-5">
        <Typography variant="h3" textAlign={"center"} gutterBottom>
          Chọn chuyến bay
        </Typography>
        <Typography variant="h5" textAlign={"center"} gutterBottom>
          Hà Nội đến TP. Hồ Chí Minh
        </Typography>
        <Typography variant="body1" textAlign={"center"}>
          11/12/2024
        </Typography>
      </div>
      <div>
        {[1, 1, 1, 1].map(() => (
          <BookingCard />
        ))}
      </div>
    </div>
  );
};

export default Booking;
