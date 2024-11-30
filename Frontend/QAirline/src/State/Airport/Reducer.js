import {
  CREATE_AIRPORT_FAILURE,
  CREATE_AIRPORT_REQUEST,
  CREATE_AIRPORT_SUCCESS,
  DELETE_AIRPORT_FAILURE,
  DELETE_AIRPORT_REQUEST,
  DELETE_AIRPORT_SUCCESS,
  GET_ALL_AIRPORT_FAILURE,
  GET_ALL_AIRPORT_REQUEST,
  GET_ALL_AIRPORT_SUCCESS,
  UPDATE_AIRPORT_FAILURE,
  UPDATE_AIRPORT_REQUEST,
  UPDATE_AIRPORT_SUCCESS,
} from "./ActionType";

const initialState = {
  isLoading: false,
  error: null,
  airports: [],
};

export const airportReducer = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_AIRPORT_REQUEST:
    case GET_ALL_AIRPORT_REQUEST:
    case UPDATE_AIRPORT_REQUEST:
    case DELETE_AIRPORT_REQUEST:
      return { ...state, isLoading: true, error: null };

    case CREATE_AIRPORT_SUCCESS:
      return {
        ...state,
        isLoading: false,
        airports: [...state.airports, action.payload],
      };

    case GET_ALL_AIRPORT_SUCCESS:
      return {
        ...state,
        isLoading: false,
        airports: action.payload,
      };

    case UPDATE_AIRPORT_SUCCESS:
      return {
        ...state,
        isLoading: false,
        airports: state.airports.map((item) =>
          item.id === action.payload.id ? action.payload : item
        ),
      };

    case DELETE_AIRPORT_SUCCESS:
      return {
        ...state,
        isLoading: false,
        airport: state.airports.filter((item) => item.id !== action.payload),
      };

    case CREATE_AIRPORT_FAILURE:
    case GET_ALL_AIRPORT_FAILURE:
    case UPDATE_AIRPORT_FAILURE:
    case DELETE_AIRPORT_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
