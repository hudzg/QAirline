import { api } from "../../config/api";
import {
  GET_FLIGHT_INSTANCE_BY_USER_FAILURE,
  GET_FLIGHT_INSTANCE_BY_USER_REQUEST,
  GET_FLIGHT_INSTANCE_BY_USER_SUCCESS,
} from "./ActionType";

export const getFlightInstanceByUser =
  ({ jwt }) =>
  async (dispatch) => {
    dispatch({ type: GET_FLIGHT_INSTANCE_BY_USER_REQUEST });
    try {
      const { data } = await api.get("/api/flight-instance/user", {
        headers: {
          Authorization: `Bearer ${jwt}`,
        },
      });
      dispatch({ type: GET_FLIGHT_INSTANCE_BY_USER_SUCCESS, payload: data });
      console.log("getFlightInstanceByUser success", data);
    } catch (error) {
      dispatch({ type: GET_FLIGHT_INSTANCE_BY_USER_FAILURE, payload: error });
      console.log("error", error);
    }
  };
