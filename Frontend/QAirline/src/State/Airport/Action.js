import { API_URL } from "../../config/api";
import { api } from "../../config/api";
import {
  CREATE_AIRPORT_FAILURE,
  CREATE_AIRPORT_REQUEST,
  CREATE_AIRPORT_SUCCESS,
  DELETE_AIRPORT_FAILURE,
  DELETE_AIRPORT_REQUEST,
  DELETE_AIRPORT_SUCCESS,
  GET_ALL_AIRPORT_FAILURE,
  GET_ALL_AIRPORT_REQUEST,
  GET_ALL_AIRPORT_SUCCESS,
  UPDATE_AIRPORT_FAILURE,
  UPDATE_AIRPORT_REQUEST,
  UPDATE_AIRPORT_SUCCESS,
} from "./ActionType";

export const createAirport =
  ({ reqData, jwt }) =>
  async (dispatch) => {
    dispatch({ type: CREATE_AIRPORT_REQUEST });
    try {
      const { data } = await api.post("/api/admin/airport", reqData, {
        headers: {
          Authorization: `Bearer ${jwt}`,
        },
      });
      dispatch({ type: CREATE_AIRPORT_SUCCESS, payload: data });
      console.log("createAirport success", data);
    } catch (error) {
      dispatch({ type: CREATE_AIRPORT_FAILURE, payload: error });
      console.log("error", error);
    }
  };

export const getAllAirport =
  ({ jwt }) =>
  async (dispatch) => {
    dispatch({ type: GET_ALL_AIRPORT_REQUEST });
    try {
      const { data } = await api.get("/api/admin/airport", {
        headers: {
          Authorization: `Bearer ${jwt}`,
        },
      });
      dispatch({ type: GET_ALL_AIRPORT_SUCCESS, payload: data });
      console.log("getAllAirport success", data);
    } catch (error) {
      dispatch({ type: GET_ALL_AIRPORT_FAILURE, payload: error });
      console.log("error", error);
    }
  };

export const updateAirport =
  ({ airportId, airportData, jwt }) =>
  async (dispatch) => {
    dispatch({ type: UPDATE_AIRPORT_REQUEST });
    try {
      const { data } = await api.put(
        `/api/admin/airport/${airportId}`,
        airportData,
        {
          headers: {
            Authorization: `Bearer ${jwt}`,
          },
        }
      );
      dispatch({ type: UPDATE_AIRPORT_SUCCESS, payload: data });
      console.log("updateAirport success", data);
    } catch (error) {
      dispatch({ type: UPDATE_AIRPORT_FAILURE, payload: error });
      console.log("error", error);
    }
  };

export const deleteAirport =
  ({ airportId, jwt }) =>
  async (dispatch) => {
    dispatch({ type: DELETE_AIRPORT_REQUEST });
    try {
      const { data } = await api.delete(`/api/admin/airport/${airportId}`, {
        headers: {
          Authorization: `Bearer ${jwt}`,
        },
      });
      dispatch({ type: DELETE_AIRPORT_SUCCESS, payload: airportId });
      console.log("deleteAirport success", data);
    } catch (error) {
      dispatch({ type: DELETE_AIRPORT_FAILURE, payload: error });
      console.log("error", error);
    }
  };
