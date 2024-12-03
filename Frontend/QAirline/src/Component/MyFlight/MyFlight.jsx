import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getFlightInstanceByUser } from "../../State/FlightInstance/Action";
import FlightCard from "./FlightCard";

const MyFlight = () => {
  const flightInstances = useSelector(
    (store) => store.flightInstance.flightInstances
  );
  const jwt = localStorage.getItem("jwt");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(getFlightInstanceByUser({ jwt }));
  }, []);

  return (
    <div className="w-[60vw] m-auto mb-5 mt-5 p-5 bg-indigo-50">
      {flightInstances.map((flightInstance) => (
        <FlightCard flightInstance={flightInstance} />
      ))}
    </div>
  );
};

export default MyFlight;
