import { api } from "../../config/api";
import {
  GET_FLIGHT_INSTANCE_BY_ADMIN_FAILURE,
  GET_FLIGHT_INSTANCE_BY_ADMIN_REQUEST,
  GET_FLIGHT_INSTANCE_BY_ADMIN_SUCCESS,
  CREATE_FLIGHT_INSTANCE_BY_ADMIN_FAILURE,
  CREATE_FLIGHT_INSTANCE_BY_ADMIN_REQUEST,
  CREATE_FLIGHT_INSTANCE_BY_ADMIN_SUCCESS,
  UPDATE_FLIGHT_INSTANCE_BY_ADMIN_FAILURE,
  UPDATE_FLIGHT_INSTANCE_BY_ADMIN_REQUEST,
  UPDATE_FLIGHT_INSTANCE_BY_ADMIN_SUCCESS,
} from "./ActionType";

export const getFlightInstanceByAdmin =
  ({ jwt }) =>
  async (dispatch) => {
    dispatch({ type: GET_FLIGHT_INSTANCE_BY_ADMIN_REQUEST });
    try {
      const { data } = await api.get("/api/admin/flight-instance", {
        headers: {
          Authorization: `Bearer ${jwt}`,
        },
      });
      dispatch({ type: GET_FLIGHT_INSTANCE_BY_ADMIN_SUCCESS, payload: data });
      console.log("getFlightInstanceByAdmin success", data);
    } catch (error) {
      dispatch({ type: GET_FLIGHT_INSTANCE_BY_ADMIN_FAILURE, payload: error });
      console.log("error", error);
    }
  };

  export const createFlightInstanceByAdmin = ({reqData, jwt}) =>
  async (dispatch) => {
    dispatch({type: CREATE_FLIGHT_INSTANCE_BY_ADMIN_REQUEST});
    try {
      const {data} = await api.post("/api/admin/flight-instance", reqData, {
        headers: {
          Authorization: `Bearer ${jwt}`,
        },
      });
      dispatch({type: CREATE_FLIGHT_INSTANCE_BY_ADMIN_SUCCESS, payload: data});
      console.log("createFlightInstance success", data);
    } catch (error) {
      dispatch({type: CREATE_FLIGHT_INSTANCE_BY_ADMIN_FAILURE, payload: error});
      console.log("error", error);
    }

  }
