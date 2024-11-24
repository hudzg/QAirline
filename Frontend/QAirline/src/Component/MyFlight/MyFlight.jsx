import FlightCard from "./FlightCard";

const MyFlight = () => {
  return (
    <div className="w-[60vw] m-auto mb-5 mt-5 p-5 bg-indigo-50"> 
      {[1, 1, 1, 1].map(() => (
        <FlightCard/>
      ))}
    </div>
  );
};

export default MyFlight;