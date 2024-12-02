import { api } from "../../config/api";
import {
  ADD_GET_FLIGHT_REQUEST,
  ADD_GET_INBOUND_FLIGHT_REQUEST,
  ADD_SELECTED_INBOUND_FLIGHT,
  ADD_SELECTED_OUTBOUND_FLIGHT,
  GET_INBOUND_FLIGHT_FAILURE,
  GET_INBOUND_FLIGHT_REQUEST,
  GET_INBOUND_FLIGHT_SUCCESS,
  GET_OUTBOUND_FLIGHT_FAILURE,
  GET_OUTBOUND_FLIGHT_REQUEST,
  GET_OUTBOUND_FLIGHT_SUCCESS,
} from "./ActionType";

export const getOutboundFlight =
  ({ departureAirportId, arrivalAirportId, departureTime, jwt }) =>
  async (dispatch) => {
    dispatch({ type: GET_OUTBOUND_FLIGHT_REQUEST });
    try {
      const { data } = await api.get(
        `/api/flight?departureAirportId=${departureAirportId}&arrivalAirportId=${arrivalAirportId}&date=${departureTime}`,
        {
          headers: {
            Authorization: `Bearer ${jwt}`,
          },
        }
      );
      // localStorage.setItem("outboundFlights", data);
      // console.log(
      //   `/api/flight?departureAirportId=${departureAirportId}&arrivalAirportId=${arrivalAirportId}&date=${departureTime}`
      // );
      dispatch({ type: GET_OUTBOUND_FLIGHT_SUCCESS, payload: data });
      console.log("getOutboundFlight success", data);
    } catch (error) {
      dispatch({ type: GET_OUTBOUND_FLIGHT_FAILURE, payload: error });
      console.log("error", error);
    }
  };

export const getInboundFlight =
  ({ departureAirportId, arrivalAirportId, departureTime, jwt }) =>
  async (dispatch) => {
    dispatch({ type: GET_INBOUND_FLIGHT_REQUEST });
    try {
      const { data } = await api.get(
        `/api/flight?departureAirportId=${departureAirportId}&arrivalAirportId=${arrivalAirportId}&date=${departureTime}`,
        {
          headers: {
            Authorization: `Bearer ${jwt}`,
          },
        }
      );
      dispatch({ type: GET_INBOUND_FLIGHT_SUCCESS, payload: data });
      console.log("getInboundFlight success", data);
    } catch (error) {
      dispatch({ type: GET_INBOUND_FLIGHT_FAILURE, payload: error });
      console.log("error", error);
    }
  };

export const addGetFlightRequest = (reqData) => async (dispatch) => {
  dispatch({ type: ADD_GET_FLIGHT_REQUEST, payload: reqData });
  localStorage.setItem("getFlightReq", JSON.stringify(reqData));
};

export const addGetInboundFlightRequest = (reqData) => async (dispatch) => {
  dispatch({ type: ADD_GET_INBOUND_FLIGHT_REQUEST, payload: reqData });
  localStorage.setItem("getInboundFlightReq", JSON.stringify(reqData));
};

export const addSelectedOutboundFlight = (reqData) => async (dispatch) => {
  dispatch({ type: ADD_SELECTED_OUTBOUND_FLIGHT, payload: reqData });
  localStorage.setItem("selectedOutboundFlight", JSON.stringify(reqData));
};

export const addSelectedInboundFlight = (reqData) => async (dispatch) => {
  dispatch({ type: ADD_SELECTED_INBOUND_FLIGHT, payload: reqData });
  localStorage.setItem("selectedInboundFlight", JSON.stringify(reqData));
};
