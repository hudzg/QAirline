import {
  CREATE_AIRPLANE_FAILURE,
  CREATE_AIRPLANE_REQUEST,
  CREATE_AIRPLANE_SUCCESS,
  DELETE_AIRPLANE_FAILURE,
  DELETE_AIRPLANE_REQUEST,
  DELETE_AIRPLANE_SUCCESS,
  GET_ALL_AIRPLANE_FAILURE,
  GET_ALL_AIRPLANE_REQUEST,
  GET_ALL_AIRPLANE_SUCCESS,
  UPDATE_AIRPLANE_FAILURE,
  UPDATE_AIRPLANE_REQUEST,
  UPDATE_AIRPLANE_SUCCESS,
} from "./ActionType";

const initialState = {
  isLoading: false,
  error: null,
  airplanes: [],
};

export const airplaneReducer = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_AIRPLANE_REQUEST:
    case GET_ALL_AIRPLANE_REQUEST:
    case UPDATE_AIRPLANE_REQUEST:
    case DELETE_AIRPLANE_REQUEST:
      return { ...state, isLoading: true, error: null };

    case CREATE_AIRPLANE_SUCCESS:
      return {
        ...state,
        isLoading: false,
        airplanes: [...state.airplanes, action.payload],
      };

    case GET_ALL_AIRPLANE_SUCCESS:
      return {
        ...state,
        isLoading: false,
        airplanes: action.payload,
      };

    case UPDATE_AIRPLANE_SUCCESS:
      return {
        ...state,
        isLoading: false,
        airplanes: state.airplanes.map((item) =>
          item.id === action.payload.id ? action.payload : item
        ),
      };

    case DELETE_AIRPLANE_SUCCESS:
      return {
        ...state,
        isLoading: false,
        airplanes: state.airplanes.filter((item) => item.id !== action.payload),
      };

    case CREATE_AIRPLANE_FAILURE:
    case GET_ALL_AIRPLANE_FAILURE:
    case UPDATE_AIRPLANE_FAILURE:
    case DELETE_AIRPLANE_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
