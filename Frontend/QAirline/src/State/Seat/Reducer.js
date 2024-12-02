import {
  ADD_CUSTOMER,
  CREATE_SEAT_FAILURE,
  CREATE_SEAT_REQUEST,
  CREATE_SEAT_SUCCESS,
} from "./ActionType";

const initialState = {
  isLoading: false,
  error: null,
  seats: [],
  customers: [],
};

export const seatReducer = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_SEAT_REQUEST:
      return { ...state, isLoading: true, error: null };

    case CREATE_SEAT_SUCCESS:
      return {
        ...state,
        isLoading: false,
        seats: [...state.seats, action.payload],
      };

    case CREATE_SEAT_FAILURE:
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
