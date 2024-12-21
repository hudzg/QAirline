import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getAllHighlightedFlight } from "../../State/HighlightedFlight/Action";
import PopularFlightCard from "./PopularFlightCard";
import Grid from "@mui/material/Grid2";

const PopularFlight = ({ searchFlightRef }) => {
  const highlightedFlight = useSelector((store) => store.highlightedFlight);
  const jwt = localStorage.getItem("jwt");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  useEffect(() => {
    dispatch(getAllHighlightedFlight());
  }, []);
  return (
    <div className="p-5 w-[90vw] lg:w-[60vw] m-auto mb-5">
      <h1
        // onClick={() => {
        //   console.log(searchFlightRef);
        //   if (searchFlightRef.current) {
        //     searchFlightRef.current.scrollIntoView({
        //       behavior: "smooth",
        //       block: "center",
        //     });
        //     // window.scrollBy(0, -100);
        //   }
        // }}
        className="text-2xl"
      >
        Các chuyến bay nổi bật của chúng tôi
      </h1>
      <div
        className="mt-5"
        // onClick={() => {
        //   if (searchFlightRef.current) {
        //     searchFlightRef.current.scrollIntoView({ behavior: "smooth" });
        //   }
        // }}
      >
        <Grid container spacing={2}>
        {highlightedFlight.highlightedFlights.map((highlightedFlight) => (
          <Grid size={{ xs: 12, lg: 4}}  key={highlightedFlight.id}>
            <PopularFlightCard
              searchFlightRef={searchFlightRef}
              highlightedFlight={highlightedFlight}
            />
          </Grid>
        ))}
      </Grid>
      </div>
    </div>
  );
};

export default PopularFlight;
