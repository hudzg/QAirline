import { Card, CardContent, CardMedia, Typography } from "@mui/material";
import React from "react";

const PopularFlightCard = ({ item }) => {
  return (
    <Card sx={{ width: "30%" }}>
      <CardMedia
        sx={{ height: 140 }}
        image="https://images.pexels.com/photos/1437614/pexels-photo-1437614.jpeg?auto=compress&cs=tinysrgb&w=600"
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Hà Nội đến
        </Typography>
        <Typography gutterBottom variant="h5" component="div">
          TP. Hồ Chí Minh
        </Typography>
        <Typography>1.000.000 VND</Typography>
        <Typography variant="body2" sx={{ color: "text.secondary" }}>
          Một Chiều / Phổ thông
        </Typography>
      </CardContent>
    </Card>
  );
};

export default PopularFlightCard;
