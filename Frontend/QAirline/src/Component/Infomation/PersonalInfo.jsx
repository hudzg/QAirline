import { Typography, Card, Button } from "@mui/material";
import React from "react";
import InfoCard from "./InfoCard";

const PersonalInfo = () => {
  return (
    <div className="w-[60vw] m-auto">
      <div className="mt-5">
        <Typography variant="h3" textAlign={"Center"} gutterBottom>
          Thông tin cá nhân
        </Typography>
      </div>
      <div>
        {[1, 1, 1].map(() => (
          <InfoCard />
        ))}
      </div>
      <div className="grid grid-cols-2 mb-5">
        <div className="flex justify-center">
          <Button 
            className="w-1/3"
            variant="contained"
            sx={{
              background: "linear-gradient(to right, #B993D6, #8CA6DB)",
            }}
          >
            Quay lại
          </Button>
        </div>
        <div className="flex justify-center">
          <Button
            className="w-1/3"
            variant="contained"
            sx={{
              background: "linear-gradient(to right, #B993D6, #8CA6DB)",
            }}
          >
            Tiếp tục
          </Button>
        </div>
      </div>
    </div>
  );
};

export default PersonalInfo;
