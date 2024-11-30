import { api } from "../../config/api";
import {
  ADD_GET_FLIGHT_REQUEST,
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
      // console.log(
      //   `/api/flight?departureAirportId=${departureAirportId}&arrivalAirportId=${arrivalAirportId}&date=${departureTime}`
      // );
      dispatch({ type: GET_OUTBOUND_FLIGHT_SUCCESS, payload: data });
      console.log("getFlight success", data);
    } catch (error) {
      dispatch({ type: GET_OUTBOUND_FLIGHT_FAILURE, payload: error });
      console.log("error", error);
    }
  };

// export const getInboundFlight =
// ({ reqData, jwt }) =>
// async (dispatch) => {
//   dispatch({ type: GET_FLIGHT_REQUEST });
//   try {
//     const { data } = await api.get(
//       `/api/flight?departureAirportId=${reqData}&arrivalAirportId=${reqData}&date=${reqData}`,
//       {
//         headers: {
//           Authorization: `Bearer ${jwt}`,
//         },
//       }
//     );
//     dispatch({ type: GET_FLIGHT_SUCCESS, payload: data });
//     console.log("getFlight success", data);
//   } catch (error) {
//     dispatch({ type: GET_FLIGHT_FAILURE, payload: error });
//     console.log("error", error);
//   }
// };

export const addGetFlightRequest = (reqData) => async (dispatch) => {
  dispatch({ type: ADD_GET_FLIGHT_REQUEST, payload: reqData });
};
