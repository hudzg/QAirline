import React from "react";
import { Rating, Typography, Button } from "@mui/material";
const Feedback = () => {
  return (
    <div className="mx-auto flex flex-col justify-center items-center w-[50vw] h-[70vh] space-y-4">
      <Typography variant="h6" align="center">
        Phản hồi của khách hàng về dịch vụ của chuyến bay
      </Typography>
      <textarea className="block w-[80%] h-[30vh] shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)] p-2.5 text-base bg-gray-50 border border-gray-300 focus:ring-blue-500 focus:border-blue-500 rounded-lg"></textarea>
      {/* <textarea
        id="message"
        rows="4"
        class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 "
        placeholder="Write your thoughts here..."
      ></textarea> */}
      <Rating
        name="half-rating"
        defaultValue={5}
        precision={1}
        size="large"
      ></Rating>
      <Button
        variant="contained"
        sx={{
          background: "linear-gradient(to right, #B993D6, #8CA6DB)",
        }}
      >
        Submit
      </Button>
    </div>
  );
};

export default Feedback;
