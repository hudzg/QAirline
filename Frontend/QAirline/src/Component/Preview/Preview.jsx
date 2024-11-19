import { Typography, Card, Button } from "@mui/material";
import React from "react";
import FlightIcon from "@mui/icons-material/Flight";

const Preview = () => {
  return (
    <div className="w-[50vw] mx-auto m-4 p-5 bg-indigo-50">
      <div className=" justify-items-center">
        <Typography variant="h4">Preview</Typography>
      </div>
      <Card className="grid grid-cols-3 items-center justify-items-center h-36 mb-6">
        <div>
          <Typography variant="h4">HAN</Typography>
          <Typography variant="body1">Khởi hành</Typography>
          <Typography variant="h5">17:00</Typography>
          <Typography variant="body1">24/03/2024</Typography>
        </div>
        <div className="flex-col flex items-center">
          <FlightIcon fontSize="large" sx={{ transform: "rotate(90deg)" }} />
          <Typography
            align="center"
            variant="body2"
            sx={{ color: "text.secondary" }}
          >
            20 giờ 20 phút
          </Typography>
        </div>
        <div>
          <Typography variant="h4">SGN</Typography>
          <Typography variant="body1">Đến nơi</Typography>
          <Typography variant="h5">17:00</Typography>
          <Typography variant="body1">24/03/2024</Typography>
        </div>
      </Card>
      <Card className="grid grid-cols-2 items-center justify-items-center mx-auto w-3/4 h-28 mb-6">
        <div>
          <Typography>Tổng hành khách: 2</Typography>
        </div>
        <div>
          <Typography>Giá mỗi hành khách: 5.000.000 VND</Typography>
        </div>
        <div className="col-span-2 justify-center">
          <Typography>Thanh toán: 10.000.000 VND</Typography>
        </div>
      </Card>
      <div className="grid grid-cols-2">
        <div className="flex justify-end mr-5">

          <Button
            variant="contained"
            sx={{
              background: "linear-gradient(to right, #B993D6, #8CA6DB)",

            }}
          >
            Quay lại
          </Button>
        </div>
        <div className="flex justify-start ml-5">
          <Button
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
  )
}

export default Preview