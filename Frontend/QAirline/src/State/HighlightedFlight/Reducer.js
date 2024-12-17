import {
  GET_ALL_HIGHLIGHTED_FLIGHT_FAILURE,
  GET_ALL_HIGHLIGHTED_FLIGHT_REQUEST,
  GET_ALL_HIGHLIGHTED_FLIGHT_SUCCESS,
} from "./ActionType";

const initialState = {
  isLoading: false,
  error: null,
  highlightedFlights: [],
};

export const highlightedFlightReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_HIGHLIGHTED_FLIGHT_REQUEST:
      return { ...state, isLoading: true, error: null };

    case GET_ALL_HIGHLIGHTED_FLIGHT_SUCCESS:
      return {
        ...state,
        isLoading: false,
        highlightedFlights: action.payload,
      };

    case GET_ALL_HIGHLIGHTED_FLIGHT_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
