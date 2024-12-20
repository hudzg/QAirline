import { API_URL } from "../../config/api";
import {
  CHANGE_PASSWORD_FAILURE,
  CHANGE_PASSWORD_REQUEST,
  CHANGE_PASSWORD_SUCCESS,
  GET_USER_FAILURE,
  GET_USER_REQUEST,
  GET_USER_SUCCESS,
  LOGIN_FAILURE,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGOUT,
  REGISTER_FAILURE,
  REGISTER_REQUEST,
  REGISTER_SUCCESS,
  UPDATE_IMAGE_FAILURE,
  UPDATE_IMAGE_REQUEST,
  UPDATE_IMAGE_SUCCESS,
} from "./ActionType";
import axios from "axios";
import { api } from "../../config/api";

export const registerUser =
  ({ userData, navigate }) =>
  async (dispatch) => {
    dispatch({ type: REGISTER_REQUEST });
    try {
      const { data } = await api.post("/auth/signup", userData);
      if (data.jwt) localStorage.setItem("jwt", data.jwt);
      if (data.role === "ROLE_MANAGER") {
        navigate("/admin");
      } else {
        navigate("/");
      }
      dispatch({ type: REGISTER_SUCCESS, payload: data.jwt });
      console.log("register success", data);
    } catch (error) {
      dispatch({ type: REGISTER_FAILURE, payload: error });
      console.log("error", error);
    }
  };

export const loginUser =
  ({ userData, navigate }) =>
  async (dispatch) => {
    dispatch({ type: LOGIN_REQUEST });
    try {
      const { data } = await axios.post(`${API_URL}/auth/signin`, userData);
      if (data.jwt) localStorage.setItem("jwt", data.jwt);
      if (data.role === "ROLE_MANAGER") {
        navigate("/admin");
      } else {
        navigate("/");
      }
      dispatch({ type: LOGIN_SUCCESS, payload: data.jwt });
      console.log("login success", data);
    } catch (error) {
      dispatch({ type: LOGIN_FAILURE, payload: error });
      console.log("error", error);
    }
  };

export const getUser = (jwt) => async (dispatch) => {
  dispatch({ type: GET_USER_REQUEST });
  try {
    const { data } = await api.get(`/api/user/profile`, {
      headers: {
        Authorization: `Bearer ${jwt}`,
      },
    });

    dispatch({ type: GET_USER_SUCCESS, payload: data });
    console.log("user profile", data);
  } catch (error) {
    dispatch({ type: GET_USER_FAILURE, payload: error });
    console.log("error", error);
  }
};

export const changePassword =
  ({ userData }) =>
  async (dispatch) => {
    dispatch({ type: CHANGE_PASSWORD_REQUEST });
    try {
      const { data } = await axios.post(
        `${API_URL}/auth/change-password`,
        userData
      );

      dispatch({ type: CHANGE_PASSWORD_SUCCESS, payload: data.jwt });
      console.log("changePassword success", data);
    } catch (error) {
      dispatch({ type: CHANGE_PASSWORD_FAILURE, payload: error });
      console.log("error", error);
    }
  };

export const updateImage =
  ({ image, jwt }) =>
  async (dispatch) => {
    dispatch({ type: UPDATE_IMAGE_REQUEST });
    try {
      const { data } = await api.put(
        `/api/user/image`,
        { image },
        {
          headers: {
            Authorization: `Bearer ${jwt}`,
          },
        }
      );

      dispatch({ type: UPDATE_IMAGE_SUCCESS, payload: data });
      console.log("updateImage success", data);
    } catch (error) {
      dispatch({ type: UPDATE_IMAGE_FAILURE, payload: error });
      console.log("error", error);
    }
  };

export const logout = () => async (dispatch) => {
  try {
    localStorage.clear();
    dispatch({ type: LOGOUT });
    console.log("logout");
  } catch (error) {
    console.log("error", error);
  }
};
