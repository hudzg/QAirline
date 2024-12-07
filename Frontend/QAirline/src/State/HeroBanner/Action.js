import { api } from "../../config/api";
import {
  GET_ALL_HERO_BANNER_FAILURE,
  GET_ALL_HERO_BANNER_REQUEST,
  GET_ALL_HERO_BANNER_SUCCESS,
} from "./ActionType";

export const getAllHeroBanner = () => async (dispatch) => {
  dispatch({ type: GET_ALL_HERO_BANNER_REQUEST });
  try {
    const { data } = await api.get("/hero-banner");
    dispatch({ type: GET_ALL_HERO_BANNER_SUCCESS, payload: data });
    console.log("getAllHeroBanner success", data);
  } catch (error) {
    dispatch({ type: GET_ALL_HERO_BANNER_FAILURE, payload: error });
    console.log("error", error);
  }
};
