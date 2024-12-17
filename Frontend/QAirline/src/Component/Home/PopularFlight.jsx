import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getAllHighlightedFlight } from "../../State/HighlightedFlight/Action";
import PopularFlightCard from "./PopularFlightCard";

const PopularFlight = ({ searchFlightRef }) => {
  const highlightedFlight = useSelector((store) => store.highlightedFlight);
  const jwt = localStorage.getItem("jwt");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  useEffect(() => {
    dispatch(getAllHighlightedFlight());
  }, []);
  return (
    <div className="p-5 w-[60vw] m-auto mb-5">
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
        className="flex flex-wrap gap-5 justify-around items-center mt-5"
        // onClick={() => {
        //   if (searchFlightRef.current) {
        //     searchFlightRef.current.scrollIntoView({ behavior: "smooth" });
        //   }
        // }}
      >
        {highlightedFlight.highlightedFlights.map((highlightedFlight) => (
          <PopularFlightCard
            searchFlightRef={searchFlightRef}
            highlightedFlight={highlightedFlight}
            key={highlightedFlight.id}
          />
        ))}
      </div>
    </div>
  );
};

export default PopularFlight;
