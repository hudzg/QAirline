import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import FlightCard from "./FlightCard";

const MyFlight = () => {
  const flight = useSelector((store) => store.flight);
  const jwt = localStorage.getItem("jwt");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  return (
    <div className="w-[60vw] m-auto mb-5 mt-5 p-5 bg-indigo-50">
      {[1, 1, 1, 1].map(() => (
        <FlightCard />
      ))}
    </div>
  );
};

export default MyFlight;
