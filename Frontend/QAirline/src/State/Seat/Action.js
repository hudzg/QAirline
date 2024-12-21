import { api } from "../../config/api";
import {
  ADD_CUSTOMER,
  CREATE_SEAT_FAILURE,
  CREATE_SEAT_REQUEST,
  CREATE_SEAT_SUCCESS,
  DELETE_SEAT_BY_USER_AND_FLIGHT_INSTANCE_FAILURE,
  DELETE_SEAT_BY_USER_AND_FLIGHT_INSTANCE_REQUEST,
  DELETE_SEAT_BY_USER_AND_FLIGHT_INSTANCE_SUCCESS,
  GET_SEAT_BY_USER_AND_FLIGHT_INSTANCE_FAILURE,
  GET_SEAT_BY_USER_AND_FLIGHT_INSTANCE_REQUEST,
  GET_SEAT_BY_USER_AND_FLIGHT_INSTANCE_SUCCESS,
  GET_SEAT_MAP_FAILURE,
  GET_SEAT_MAP_REQUEST,
  GET_SEAT_MAP_SUCCESS,
} from "./ActionType";

export const createSeat =
  ({ reqData, jwt }) =>
  async (dispatch) => {
    dispatch({ type: CREATE_SEAT_REQUEST });
    try {
      const { data } = await api.post("/api/seat", reqData, {
        headers: {
          Authorization: `Bearer ${jwt}`,
        },
      });
      dispatch({ type: CREATE_SEAT_SUCCESS, payload: data });
      console.log("createSeat success", data);
    } catch (error) {
      dispatch({ type: CREATE_SEAT_FAILURE, payload: error });
      console.log("error", error);
    }
  };

export const addCustomer = (reqData) => async (dispatch) => {
  dispatch({ type: ADD_CUSTOMER, payload: reqData });
  console.log("addCustomer", reqData);
};

export const getSeatsByUserAndFlightInstance =
  ({ flightInstanceId, jwt }) =>
  async (dispatch) => {
    dispatch({ type: GET_SEAT_BY_USER_AND_FLIGHT_INSTANCE_REQUEST });
    try {
      const { data } = await api.get(
        `/api/seat/user/flight-instance/${flightInstanceId}`,
        {
          headers: {
            Authorization: `Bearer ${jwt}`,
          },
        }
      );
      dispatch({
        type: GET_SEAT_BY_USER_AND_FLIGHT_INSTANCE_SUCCESS,
        payload: data,
      });
      console.log("getSeatsByUserAndFlightInstance success", data);
    } catch (error) {
      dispatch({
        type: GET_SEAT_BY_USER_AND_FLIGHT_INSTANCE_FAILURE,
        payload: error,
      });
      console.log("error", error);
    }
  };

export const deleteSeatByUserAndFlightInstance =
  ({ seatId, jwt }) =>
  async (dispatch) => {
    dispatch({ type: DELETE_SEAT_BY_USER_AND_FLIGHT_INSTANCE_REQUEST });
    try {
      const { data } = await api.delete(`/api/seat/${seatId}`, {
        headers: {
          Authorization: `Bearer ${jwt}`,
        },
      });
      dispatch({
        type: DELETE_SEAT_BY_USER_AND_FLIGHT_INSTANCE_SUCCESS,
        payload: data,
      });
      console.log("deleteSeatsByUserAndFlightInstance success", data);
    } catch (error) {
      dispatch({
        type: DELETE_SEAT_BY_USER_AND_FLIGHT_INSTANCE_FAILURE,
        payload: error,
      });
      console.log("error", error);
    }
  };

export const getSeatMap =
  ({ flightId, date, jwt }) =>
  async (dispatch) => {
    dispatch({ type: GET_SEAT_MAP_REQUEST });
    try {
      const { data } = await api.get(
        `/api/seat/seat-map?flightId=${flightId}&date=${date}`,
        {
          headers: {
            Authorization: `Bearer ${jwt}`,
          },
        }
      );
      dispatch({
        type: GET_SEAT_MAP_SUCCESS,
        payload: data,
      });
      console.log("getSeatMap success", data);
    } catch (error) {
      dispatch({
        type: GET_SEAT_MAP_FAILURE,
        payload: error,
      });
      console.log("error", error);
    }
  };
