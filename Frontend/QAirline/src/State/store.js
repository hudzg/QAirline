import { authReducer } from "./Authentication/Reducer";
import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import { thunk } from "redux-thunk";
import { airportReducer } from "./Airport/Reducer";
import { flightReducer } from "./Flight/Reducer";
import { seatReducer } from "./Seat/Reducer";
import { flightInstanceReducer } from "./FlightInstance/Reducer";
import { flightAdminReducer } from "./FlightAdmin/Reducer";
import { airplaneReducer } from "./Airplane/Reducer";
import { heroBannerReducer } from "./HeroBanner/Reducer";

const rootReducer = combineReducers({
  auth: authReducer,
  airport: airportReducer,
  flight: flightReducer,
  flightAdmin: flightAdminReducer,
  seat: seatReducer,
  flightInstance: flightInstanceReducer,
  airplane: airplaneReducer,
  heroBanner: heroBannerReducer,
});

export const store = legacy_createStore(rootReducer, applyMiddleware(thunk));
