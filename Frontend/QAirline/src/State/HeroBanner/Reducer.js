import {
  GET_ALL_HERO_BANNER_FAILURE,
  GET_ALL_HERO_BANNER_REQUEST,
  GET_ALL_HERO_BANNER_SUCCESS,
} from "./ActionType";

const initialState = {
  isLoading: false,
  error: null,
  heroBanners: [],
};

export const heroBannerReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_HERO_BANNER_REQUEST:
      return { ...state, isLoading: true, error: null };

    case GET_ALL_HERO_BANNER_SUCCESS:
      return {
        ...state,
        isLoading: false,
        heroBanners: action.payload,
      };

    case GET_ALL_HERO_BANNER_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
