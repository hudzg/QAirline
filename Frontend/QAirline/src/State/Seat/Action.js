import { api } from "../../config/api";
import {
  ADD_CUSTOMER,
  CREATE_SEAT_FAILURE,
  CREATE_SEAT_REQUEST,
  CREATE_SEAT_SUCCESS,
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
};
