import { api } from "../../config/api";
import {
  CREATE_POST_FAILURE,
  CREATE_POST_REQUEST,
  CREATE_POST_SUCCESS,
  DELETE_POST_FAILURE,
  DELETE_POST_REQUEST,
  DELETE_POST_SUCCESS,
  FIND_POST_BY_ID_FAILURE,
  FIND_POST_BY_ID_REQUEST,
  FIND_POST_BY_ID_SUCCESS,
  GET_ALL_POST_FAILURE,
  GET_ALL_POST_REQUEST,
  GET_ALL_POST_SUCCESS,
} from "./ActionType";

export const createPost =
  ({ reqData, jwt }) =>
  async (dispatch) => {
    dispatch({ type: CREATE_POST_REQUEST });
    try {
      const { data } = await api.post("/api/admin/post", reqData, {
        headers: {
          Authorization: `Bearer ${jwt}`,
        },
      });
      dispatch({ type: CREATE_POST_SUCCESS, payload: data });
      console.log("createPost success", data);
    } catch (error) {
      dispatch({ type: CREATE_POST_FAILURE, payload: error });
      console.log("error", error);
    }
  };

export const getAllPost = () => async (dispatch) => {
  dispatch({ type: GET_ALL_POST_REQUEST });
  try {
    const { data } = await api.get("/post");
    dispatch({ type: GET_ALL_POST_SUCCESS, payload: data });
    console.log("getAllPost success", data);
  } catch (error) {
    dispatch({ type: GET_ALL_POST_FAILURE, payload: error });
    console.log("error", error);
  }
};

export const deletePost =
  ({ postId, jwt }) =>
  async (dispatch) => {
    dispatch({ type: DELETE_POST_REQUEST });
    try {
      const { data } = await api.delete(`/api/admin/post/${postId}`, {
        headers: {
          Authorization: `Bearer ${jwt}`,
        },
      });
      dispatch({ type: DELETE_POST_SUCCESS, payload: postId });
      console.log("DELETEPost success", data);
    } catch (error) {
      dispatch({ type: DELETE_POST_FAILURE, payload: error });
      console.log("error", error);
    }
  };

export const findPostById = (id) => async (dispatch) => {
  dispatch({ type: FIND_POST_BY_ID_REQUEST });
  try {
    const { data } = await api.get(`/post/${id}`);
    dispatch({ type: FIND_POST_BY_ID_SUCCESS, payload: data });
    console.log("findPostById success", data);
  } catch (error) {
    dispatch({ type: FIND_POST_BY_ID_FAILURE, payload: error });
    console.log("error", error);
  }
};
