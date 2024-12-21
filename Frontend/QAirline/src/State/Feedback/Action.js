import { API_URL } from "../../config/api";
import { api } from "../../config/api";
import {
  CREATE_FEEDBACK_FAILURE,
  CREATE_FEEDBACK_REQUEST,
  CREATE_FEEDBACK_SUCCESS,
  GET_ALL_FEEDBACK_FAILURE,
  GET_ALL_FEEDBACK_REQUEST,
  GET_ALL_FEEDBACK_SUCCESS,
} from "./ActionType";

export const getAllFeedback =
  ({ jwt }) =>
  async (dispatch) => {
    dispatch({ type: GET_ALL_FEEDBACK_REQUEST });
    try {
      const { data } = await api.get("/api/feedback", {
        headers: {
          Authorization: `Bearer ${jwt}`,
        },
      });
      dispatch({ type: GET_ALL_FEEDBACK_SUCCESS, payload: data });
      console.log("getAllFeedback success", data);
    } catch (error) {
      dispatch({ type: GET_ALL_FEEDBACK_FAILURE, payload: error });
      console.log("error", error);
    }
  };

export const createFeedback =
  ({ reqData, jwt }) =>
  async (dispatch) => {
    dispatch({ type: CREATE_FEEDBACK_REQUEST });
    try {
      const { data } = await api.post("/api/feedback", reqData, {
        headers: {
          Authorization: `Bearer ${jwt}`,
        },
      });
      dispatch({ type: CREATE_FEEDBACK_SUCCESS, payload: data });
      console.log("createFeedback success", data);
    } catch (error) {
      dispatch({ type: CREATE_FEEDBACK_FAILURE, payload: error });
      console.log("error", error);
    }
  };
