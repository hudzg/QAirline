import {
  GET_FLIGHT_INSTANCE_BY_ADMIN_FAILURE,
  GET_FLIGHT_INSTANCE_BY_ADMIN_REQUEST,
  GET_FLIGHT_INSTANCE_BY_ADMIN_SUCCESS,
  CREATE_FLIGHT_INSTANCE_BY_ADMIN_FAILURE,
  CREATE_FLIGHT_INSTANCE_BY_ADMIN_REQUEST,
  CREATE_FLIGHT_INSTANCE_BY_ADMIN_SUCCESS,
  UPDATE_FLIGHT_INSTANCE_BY_ADMIN_FAILURE,
  UPDATE_FLIGHT_INSTANCE_BY_ADMIN_REQUEST,
  UPDATE_FLIGHT_INSTANCE_BY_ADMIN_SUCCESS,
  UPDATE_LEG_INSTANCE_BY_ADMIN_FAILURE,
  UPDATE_LEG_INSTANCE_BY_ADMIN_REQUEST,
  UPDATE_LEG_INSTANCE_BY_ADMIN_SUCCESS,
} from "./ActionType";

const initialState = {
  isLoading: false,
  error: null,
  flightInstances: [],
};

export const flightInstanceAdminReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_FLIGHT_INSTANCE_BY_ADMIN_REQUEST:
    case CREATE_FLIGHT_INSTANCE_BY_ADMIN_REQUEST:
    case UPDATE_FLIGHT_INSTANCE_BY_ADMIN_REQUEST:
    case UPDATE_LEG_INSTANCE_BY_ADMIN_REQUEST:
      return { ...state, isLoading: true, error: null };

    case GET_FLIGHT_INSTANCE_BY_ADMIN_SUCCESS:
      return {
        ...state,
        isLoading: false,
        flightInstances: action.payload,
      };

    case CREATE_FLIGHT_INSTANCE_BY_ADMIN_SUCCESS:
      return {
        ...state,
        isLoading: false,
        flightInstances: [...state.flightInstances, action.payload],
      };

    case UPDATE_FLIGHT_INSTANCE_BY_ADMIN_SUCCESS:
      return {
        ...state,
        isLoading: false,
        flightInstances: state.flightInstances.map((item) =>
          item.id === action.payload.id ? action.payload : item
        ),
      };

    case UPDATE_LEG_INSTANCE_BY_ADMIN_SUCCESS:
      return {
        ...state,
        isLoading: false,
        flightInstances: state.flightInstances.map((item) =>
          item.id === action.payload.flightInstanceId
            ? {
                ...item, 
                legInstances: item.legInstances.map((leg) =>
                  leg.id === action.payload.data.id ? action.payload.data : leg
                ),
              }
            : item
        ),
        
      };

    case GET_FLIGHT_INSTANCE_BY_ADMIN_FAILURE:
    case CREATE_FLIGHT_INSTANCE_BY_ADMIN_FAILURE:
    case UPDATE_FLIGHT_INSTANCE_BY_ADMIN_FAILURE:
    case UPDATE_LEG_INSTANCE_BY_ADMIN_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };

    default:
      return state;
  }
};
