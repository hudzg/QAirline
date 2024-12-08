import {
  CREATE_FLIGHT_FAILURE,
  CREATE_FLIGHT_REQUEST,
  CREATE_FLIGHT_SUCCESS,
  DELETE_FLIGHT_FAILURE,
  DELETE_FLIGHT_REQUEST,
  DELETE_FLIGHT_SUCCESS,
  GET_ALL_FLIGHT_FAILURE,
  GET_ALL_FLIGHT_REQUEST,
  GET_ALL_FLIGHT_SUCCESS,
  UPDATE_FLIGHT_FAILURE,
  UPDATE_FLIGHT_REQUEST,
  UPDATE_FLIGHT_SUCCESS,
} from "./ActionType";

const initialState = {
  isLoading: false,
  error: null,
  flights: [],
};

export const flightAdminReducer = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_FLIGHT_REQUEST:
    case GET_ALL_FLIGHT_REQUEST:
    case UPDATE_FLIGHT_REQUEST:
    case DELETE_FLIGHT_REQUEST:
      return { ...state, isLoading: true, error: null };

    case CREATE_FLIGHT_SUCCESS:
      return {
        ...state,
        isLoading: false,
        flights: [...state.flights, action.payload],
      };

    case GET_ALL_FLIGHT_SUCCESS:
      return {
        ...state,
        isLoading: false,
        flights: action.payload,
      };

    case UPDATE_FLIGHT_SUCCESS:
      return {
        ...state,
        isLoading: false,
        flights: state.flights.map((item) =>
          item.id === action.payload.id ? action.payload : item
        ),
      };

    case DELETE_FLIGHT_SUCCESS:
      return {
        ...state,
        isLoading: false,
        FLIGHT: state.flights.filter((item) => item.id !== action.payload),
      };

    case CREATE_FLIGHT_FAILURE:
    case GET_ALL_FLIGHT_FAILURE:
    case UPDATE_FLIGHT_FAILURE:
    case DELETE_FLIGHT_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
