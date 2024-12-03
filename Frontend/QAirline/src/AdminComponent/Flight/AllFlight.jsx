import { Typography } from "@mui/material";
import FlightCard from "./FlightCard";

const AllFlight = () => {
  return (
    <div className="w-[90%] justify-self-center mt-5">
      <Typography variant="h4">Quản lý chuyến bay</Typography>
      <div className="grid grid-cols-3 gap-2">
        {[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1].map(() => (
          <FlightCard />
        ))}
      </div>
    </div>
  );
};

export default AllFlight;
