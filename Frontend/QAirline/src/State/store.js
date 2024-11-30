import { authReducer } from "./Authentication/Reducer";
import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import { thunk } from "redux-thunk";
import { airportReducer } from "./Airport/Reducer";
import { flightReducer } from "./Flight/Reducer";

const rootReducer = combineReducers({
  auth: authReducer,
  airport: airportReducer,
  flight: flightReducer,
});

export const store = legacy_createStore(rootReducer, applyMiddleware(thunk));
