import { API_URL } from "../../config/api";
import { api } from "../../config/api";
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

export const createAirplane =
  ({ reqData, jwt }) =>
  async (dispatch) => {
    dispatch({ type: CREATE_AIRPLANE_REQUEST });
    try {
      const { data } = await api.post("/api/admin/airplane", reqData, {
        headers: {
          Authorization: `Bearer ${jwt}`,
        },
      });
      dispatch({ type: CREATE_AIRPLANE_SUCCESS, payload: data });
      console.log("createAirplane success", data);
    } catch (error) {
      dispatch({ type: CREATE_AIRPLANE_FAILURE, payload: error });
      console.log("error", error);
    }
  };

export const getAllAirplane =
  ({ jwt }) =>
  async (dispatch) => {
    dispatch({ type: GET_ALL_AIRPLANE_REQUEST });
    try {
      const { data } = await api.get("/api/admin/airplane", {
        headers: {
          Authorization: `Bearer ${jwt}`,
        },
      });
      dispatch({ type: GET_ALL_AIRPLANE_SUCCESS, payload: data });
      console.log("getAllAirplane success", data);
    } catch (error) {
      dispatch({ type: GET_ALL_AIRPLANE_FAILURE, payload: error });
      console.log("error", error);
    }
  };

export const updateAirplane =
  ({ airplaneId, airplaneData, jwt }) =>
  async (dispatch) => {
    dispatch({ type: UPDATE_AIRPLANE_REQUEST });
    try {
      const { data } = await api.put(
        `/api/admin/airplane/${airplaneId}`,
        airplaneData,
        {
          headers: {
            Authorization: `Bearer ${jwt}`,
          },
        }
      );
      dispatch({ type: UPDATE_AIRPLANE_SUCCESS, payload: data });
      console.log("updateAirplane success", data);
    } catch (error) {
      dispatch({ type: UPDATE_AIRPLANE_FAILURE, payload: error });
      console.log("error", error);
    }
  };

export const deleteAirplane =
  ({ airplaneId, jwt }) =>
  async (dispatch) => {
    dispatch({ type: DELETE_AIRPLANE_REQUEST });
    try {
      const { data } = await api.delete(`/api/admin/airplane/${airplaneId}`, {
        headers: {
          Authorization: `Bearer ${jwt}`,
        },
      });
      dispatch({ type: DELETE_AIRPLANE_SUCCESS, payload: airplaneId });
      console.log("deleteAirplane success", data);
    } catch (error) {
      dispatch({ type: DELETE_AIRPLANE_FAILURE, payload: error });
      console.log("error", error);
    }
  };
