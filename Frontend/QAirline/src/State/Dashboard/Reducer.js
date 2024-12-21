import {
  GET_DASHBOARD_FAILURE,
  GET_DASHBOARD_REQUEST,
  GET_DASHBOARD_SUCCESS,
} from "./ActionType";

const initialState = {
  isLoading: false,
  error: null,
  dashboard: null,
};

export const dashboardReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_DASHBOARD_REQUEST:
      return { ...state, isLoading: true, error: null };

    case GET_DASHBOARD_SUCCESS:
      return {
        ...state,
        isLoading: false,
        dashboard: action.payload,
      };

    case GET_DASHBOARD_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
