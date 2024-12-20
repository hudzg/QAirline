import {
  CREATE_POST_FAILURE,
  CREATE_POST_REQUEST,
  CREATE_POST_SUCCESS,
  DELETE_POST_FAILURE,
  DELETE_POST_REQUEST,
  DELETE_POST_SUCCESS,
  FIND_POST_BY_ID_FAILURE,
  FIND_POST_BY_ID_REQUEST,
  FIND_POST_BY_ID_SUCCESS,
  GET_ALL_POST_FAILURE,
  GET_ALL_POST_REQUEST,
  GET_ALL_POST_SUCCESS,
} from "./ActionType";

const initialState = {
  isLoading: false,
  error: null,
  posts: [],
  post: null,
};

export const postReducer = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_POST_REQUEST:
    case GET_ALL_POST_REQUEST:
    case DELETE_POST_REQUEST:
    case FIND_POST_BY_ID_REQUEST:
      return { ...state, isLoading: true, error: null };

    case CREATE_POST_SUCCESS:
      return {
        ...state,
        isLoading: false,
        posts: [...state.posts, action.payload],
      };

    case GET_ALL_POST_SUCCESS:
      return {
        ...state,
        isLoading: false,
        posts: action.payload,
      };

    case DELETE_POST_SUCCESS:
      return {
        ...state,
        isLoading: false,
        posts: state.posts.filter((item) => item.id !== action.payload),
      };

    case FIND_POST_BY_ID_SUCCESS:
      return {
        ...state,
        isLoading: false,
        post: action.payload,
      };

    case CREATE_POST_FAILURE:
    case GET_ALL_POST_FAILURE:
    case DELETE_POST_FAILURE:
    case FIND_POST_BY_ID_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
