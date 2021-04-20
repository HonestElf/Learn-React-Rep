import { createActions } from "redux-actions";

export const {
  firefly: { fetchRequest, fetchSuccess, fetchFailure },
} = createActions(
  {
    // "FETCH_REQUEST",
    // "FETCH_SUCCESS",
    // "FETCH_FAILURE"
    FIREFLY: {
      FETCH_REQUEST: undefined,
      FETCH_SUCCESS: [(images) => images, (_, length) => ({ length })],
      FETCH_FAILURE: undefined,
    },
  },
  { namespace: "---" }
);

//особенности:

// fetchRequest("some data") => {
// type: "FETCH_REQUEST",
// payload: "some data"
// }

// fetchRequest.toString() =>"FETCH_REQUEST"

//creatreActions делает все, что написано ниже

// export const FETCH_REQUEST = "FETCH_REQUEST";
// export const FETCH_SUCCESS = "FETCH_SUCCESS";
// export const FETCH_FAILURE = "FETCH_FAILURE";

// export const fetchRequest = () => ({
//   type: FETCH_REQUEST,
// });

// export const fetchSuccess = (payload) => ({
//   type: FETCH_SUCCESS,
//   payload,
// });

// export const fetchFailure = (payload) => ({
//   type: FETCH_FAILURE,
//   payload,
// });
