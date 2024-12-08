import { API_URL } from "../../config/api";
import { api } from "../../config/api";
import {
  CREATE_FLIGHT_FAILURE,
  CREATE_FLIGHT_REQUEST,
  CREATE_FLIGHT_SUCCESS,
  DELETE_FLIGHT_FAILURE,
  DELETE_FLIGHT_REQUEST,
  DELETE_FLIGHT_SUCCESS,
  GET_ALL_FLIGHT_FAILURE,
  GET_ALL_FLIGHT_REQUEST,
  GET_ALL_FLIGHT_SUCCESS,
  UPDATE_FLIGHT_FAILURE,
  UPDATE_FLIGHT_REQUEST,
  UPDATE_FLIGHT_SUCCESS,
} from "./ActionType";

export const createFlight =
  ({ reqData, jwt }) =>
  async (dispatch) => {
    dispatch({ type: CREATE_FLIGHT_REQUEST });
    try {
      const { data } = await api.post("/api/admin/flight", reqData, {
        headers: {
          Authorization: `Bearer ${jwt}`,
        },
      });
      dispatch({ type: CREATE_FLIGHT_SUCCESS, payload: data });
      console.log("createFlight success", data);
    } catch (error) {
      dispatch({ type: CREATE_FLIGHT_FAILURE, payload: error });
      console.log("error", error);
    }
  };

export const getAllFlight =
  ({ jwt }) =>
  async (dispatch) => {
    dispatch({ type: GET_ALL_FLIGHT_REQUEST });
    try {
      const { data } = await api.get("/api/admin/flight", {
        headers: {
          Authorization: `Bearer ${jwt}`,
        },
      });
      dispatch({ type: GET_ALL_FLIGHT_SUCCESS, payload: data });
      console.log("getAllFlight success", data);
    } catch (error) {
      dispatch({ type: GET_ALL_FLIGHT_FAILURE, payload: error });
      console.log("error", error);
    }
  };
