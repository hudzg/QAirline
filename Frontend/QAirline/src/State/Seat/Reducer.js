import {
  ADD_CUSTOMER,
  CREATE_SEAT_FAILURE,
  CREATE_SEAT_REQUEST,
  CREATE_SEAT_SUCCESS,
  GET_SEAT_BY_USER_AND_FLIGHT_INSTANCE_FAILURE,
  GET_SEAT_BY_USER_AND_FLIGHT_INSTANCE_REQUEST,
  GET_SEAT_BY_USER_AND_FLIGHT_INSTANCE_SUCCESS,
} from "./ActionType";

const initialState = {
  isLoading: false,
  error: null,
  seats: [],
  customers: [],
  userSeats: [],
};

export const seatReducer = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_SEAT_REQUEST:
    case GET_SEAT_BY_USER_AND_FLIGHT_INSTANCE_REQUEST:
      return { ...state, isLoading: true, error: null };

    case CREATE_SEAT_SUCCESS:
      return {
        ...state,
        isLoading: false,
        seats: [...state.seats, action.payload],
      };

    case GET_SEAT_BY_USER_AND_FLIGHT_INSTANCE_SUCCESS:
      return {
        ...state,
        isLoading: false,
        userSeats: action.payload,
      };

    case CREATE_SEAT_FAILURE:
    case GET_SEAT_BY_USER_AND_FLIGHT_INSTANCE_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };
    case ADD_CUSTOMER:
      return {
        ...state,
        customers: action.payload,
      };
    default:
      return state;
  }
};
