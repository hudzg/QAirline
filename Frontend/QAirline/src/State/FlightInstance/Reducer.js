import {
  GET_FLIGHT_INSTANCE_BY_USER_FAILURE,
  GET_FLIGHT_INSTANCE_BY_USER_REQUEST,
  GET_FLIGHT_INSTANCE_BY_USER_SUCCESS,
} from "./ActionType";

const initialState = {
  isLoading: false,
  error: null,
  flightInstances: [],
};

export const flightInstanceReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_FLIGHT_INSTANCE_BY_USER_REQUEST:
      return { ...state, isLoading: true, error: null };

    case GET_FLIGHT_INSTANCE_BY_USER_SUCCESS:
      return {
        ...state,
        isLoading: false,
        flightInstances: action.payload,
      };

    case GET_FLIGHT_INSTANCE_BY_USER_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };

    default:
      return state;
  }
};
