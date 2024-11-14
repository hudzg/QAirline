import React from "react";
import { Rating, Typography, Button } from "@mui/material";
const Feedback = () => {
  return (
    <div className="mx-auto items-center justify-center mt-24 mb-5 w-[50vw]">
      <div className="mb-4">
        <Typography variant="h6">Phản hồi của khách hàng về dịch vụ của chuyến bay</Typography>
      </div>
      <div className="mb-4">
        <textarea className="w-[466px] h-[200px] shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)] "></textarea>
      </div>
      <div className="mb-4">
        <Rating name="half-rating" defaultValue={5} precision={1} size="large">
        </Rating>
      </div>
      <div>
        <Button className=""
          variant="contained"
          sx={{
            background: "linear-gradient(to right, #B993D6, #8CA6DB)",
          }}>Submit</Button>
      </div>
    </div>
  );
};

export default Feedback;
