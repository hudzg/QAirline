import {
  ADD_GET_FLIGHT_REQUEST,
  GET_OUTBOUND_FLIGHT_FAILURE,
  GET_OUTBOUND_FLIGHT_REQUEST,
  GET_OUTBOUND_FLIGHT_SUCCESS,
} from "./ActionType";

const initialState = {
  isLoading: false,
  error: null,
  outboundFlights: [],
  inboundFlights: [],
  getFlightReq: {
    departureAirport: null,
    arrivalAirport: null,
    departureTime: "",
    arrivalTime: "",
    numPassenger: "",
    flightType: "",
  },
};

export const flightReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_GET_FLIGHT_REQUEST:
      return {
        ...state,
        getFlightReq: action.payload,
      };
    case GET_OUTBOUND_FLIGHT_REQUEST:
      return { ...state, isLoading: true, error: null };
    case GET_OUTBOUND_FLIGHT_SUCCESS:
      return {
        ...state,
        isLoading: false,
        outboundFlights: action.payload,
      };
    case GET_OUTBOUND_FLIGHT_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
