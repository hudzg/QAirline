import { API_URL } from "../../config/api";
import { api } from "../../config/api";
import {
  GET_DASHBOARD_FAILURE,
  GET_DASHBOARD_REQUEST,
  GET_DASHBOARD_SUCCESS,
} from "./ActionType";

export const getDashboard =
  ({ jwt }) =>
  async (dispatch) => {
    dispatch({ type: GET_DASHBOARD_REQUEST });
    try {
      const { data } = await api.get("/api/admin/dashboard", {
        headers: {
          Authorization: `Bearer ${jwt}`,
        },
      });
      dispatch({ type: GET_DASHBOARD_SUCCESS, payload: data });
      console.log("getDashboard success", data);
    } catch (error) {
      dispatch({ type: GET_DASHBOARD_FAILURE, payload: error });
      console.log("error", error);
    }
  };
