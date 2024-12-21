import {
  CREATE_FEEDBACK_FAILURE,
  CREATE_FEEDBACK_REQUEST,
  CREATE_FEEDBACK_SUCCESS,
  GET_ALL_FEEDBACK_FAILURE,
  GET_ALL_FEEDBACK_REQUEST,
  GET_ALL_FEEDBACK_SUCCESS,
} from "./ActionType";

const initialState = {
  isLoading: false,
  error: null,
  feedback: null,
  feedbacks: [],
};

export const feedbackReducer = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_FEEDBACK_REQUEST:
    case GET_ALL_FEEDBACK_REQUEST:
      return { ...state, isLoading: true, error: null };

    case CREATE_FEEDBACK_SUCCESS:
      return {
        ...state,
        isLoading: false,
        feedback: action.payload,
      };

    case GET_ALL_FEEDBACK_SUCCESS:
      return {
        ...state,
        isLoading: false,
        feedbacks: action.payload,
      };

    case CREATE_FEEDBACK_FAILURE:
    case GET_ALL_FEEDBACK_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
