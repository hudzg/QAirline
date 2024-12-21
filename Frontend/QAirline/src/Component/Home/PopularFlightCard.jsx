import { Card, CardContent, CardMedia, Typography } from "@mui/material";
import React from "react";
import { useDispatch } from "react-redux";
import { addSelectedHighlightFlight } from "../../State/Flight/Action";

const PopularFlightCard = ({ highlightedFlight, searchFlightRef }) => {
  const dispatch = useDispatch();
  return (
    <>
      <Card
        onClick={() => {
          console.log(searchFlightRef);
          if (searchFlightRef.current) {
            searchFlightRef.current.scrollIntoView({
              behavior: "smooth",
              block: "center",
            });
            // window.scrollBy(0, -100);
            dispatch(
              addSelectedHighlightFlight({
                departureAirport:
                  highlightedFlight.flight.flightLegs[0].departureAirport,
                arrivalAirport:
                  highlightedFlight.flight.flightLegs[0].arrivalAirport,
                flightType: highlightedFlight.flightType,
              })
            );
          }
        }}
        sx={{
          cursor: "pointer",
          width: "100%", // Chiếm toàn bộ chiều rộng của phần tử chứa (container)
        }}
      >
        <CardMedia
          sx={{ height: 140 }}
          image={highlightedFlight.image}
          title={highlightedFlight.flight.flightLegs[0].departureAirport.city}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {highlightedFlight.flight.flightLegs[0].departureAirport.city} đến
          </Typography>
          <Typography gutterBottom variant="h5" component="div">
            {highlightedFlight.flight.flightLegs.at(-1).arrivalAirport.city}
          </Typography>
          <Typography>{highlightedFlight.ticket.price} VND</Typography>
          <Typography variant="body2" sx={{ color: "text.secondary" }}>
            {highlightedFlight.flightType === "one-way"
              ? "Một chiều"
              : "Khứ hồi"}{" "}
            / Phổ thông
          </Typography>
        </CardContent>
      </Card>
    </>
  );
};

export default PopularFlightCard;
