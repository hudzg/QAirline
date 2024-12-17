import {
  ADD_GET_FLIGHT_REQUEST,
  ADD_GET_INBOUND_FLIGHT_REQUEST,
  ADD_SELECTED_HIGHLIGHT_FLIGHT,
  ADD_SELECTED_INBOUND_FLIGHT,
  ADD_SELECTED_OUTBOUND_FLIGHT,
  GET_INBOUND_FLIGHT_FAILURE,
  GET_INBOUND_FLIGHT_REQUEST,
  GET_INBOUND_FLIGHT_SUCCESS,
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
    departureAirport: {},
    arrivalAirport: {},
    departureTime: "",
    arrivalTime: "",
    numPassenger: 0,
    flightType: "",
  },
  getInboundFlightReq: {
    departureAirport: {},
    arrivalAirport: {},
    departureTime: "",
    arrivalTime: "",
    numPassenger: 0,
    flightType: "",
  },
  selectedOutboundFlight: null,
  selectedInboundFlight: null,
  selectedHightlightFlight: {
    departureAirport: null,
    arrivalAirport: null,
    flightType: "",
  },
};

export const flightReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_GET_FLIGHT_REQUEST:
      return {
        ...state,
        getFlightReq: action.payload,
        // selectedOutboundFlight: null,
        // selectedInboundFlight: null,
      };
    case ADD_GET_INBOUND_FLIGHT_REQUEST:
      return {
        ...state,
        getInboundFlightReq: action.payload,
        // selectedOutboundFlight: null,
        // selectedInboundFlight: null,
      };
    case GET_OUTBOUND_FLIGHT_REQUEST:
    case GET_INBOUND_FLIGHT_REQUEST:
      return { ...state, isLoading: true, error: null };
    case GET_OUTBOUND_FLIGHT_SUCCESS:
      return {
        ...state,
        isLoading: false,
        outboundFlights: action.payload,
      };
    case GET_INBOUND_FLIGHT_SUCCESS:
      return {
        ...state,
        isLoading: false,
        inboundFlights: action.payload,
      };
    case GET_OUTBOUND_FLIGHT_FAILURE:
    case GET_INBOUND_FLIGHT_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };
    case ADD_SELECTED_OUTBOUND_FLIGHT:
      return {
        ...state,
        selectedOutboundFlight: action.payload,
      };
    case ADD_SELECTED_INBOUND_FLIGHT:
      return {
        ...state,
        selectedInboundFlight: action.payload,
      };
    case ADD_SELECTED_HIGHLIGHT_FLIGHT:
      return {
        ...state,
        selectedHightlightFlight: action.payload,
      };
    default:
      return state;
  }
};
