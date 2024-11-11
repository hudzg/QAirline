import React from "react";

import PopularFlight from "./PopularFlight";
import SearchFlight from "./SearchFlight";

const Home = () => {
  return (
    <div className="px-5 lg:px-20">
      <img
        className="w-full h-[80vh] py-5"
        src="https://images.pexels.com/photos/91217/pexels-photo-91217.jpeg?auto=compress&cs=tinysrgb&w=600"
        alt=""
      />
      <SearchFlight />
      <PopularFlight />
    </div>
  );
};

export default Home;
