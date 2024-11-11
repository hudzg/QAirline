import React from "react";
import PopularFlightCard from "./PopularFlightCard";

const PopularFlight = () => {
  return (
    <div className="p-5 w-[60vw] m-auto mb-5">
      <h1 className="text-2xl">Các chuyến bay nổi bật của chúng tôi</h1>
      <div className="flex flex-wrap gap-5 justify-around items-center mt-5">
        {[1, 1, 1, 1, 1, 1].map(() => (
          <PopularFlightCard />
        ))}
      </div>
    </div>
  );
};

export default PopularFlight;
