import { api } from "../../config/api";
import {
  GET_ALL_HIGHLIGHTED_FLIGHT_FAILURE,
  GET_ALL_HIGHLIGHTED_FLIGHT_REQUEST,
  GET_ALL_HIGHLIGHTED_FLIGHT_SUCCESS,
} from "./ActionType";

export const getAllHighlightedFlight = () => async (dispatch) => {
  dispatch({ type: GET_ALL_HIGHLIGHTED_FLIGHT_REQUEST });
  try {
    const { data } = await api.get("/highlighted-flight");
    dispatch({ type: GET_ALL_HIGHLIGHTED_FLIGHT_SUCCESS, payload: data });
    console.log("getAllHighlightedFlight success", data);
  } catch (error) {
    dispatch({ type: GET_ALL_HIGHLIGHTED_FLIGHT_FAILURE, payload: error });
    console.log("error", error);
  }
};
