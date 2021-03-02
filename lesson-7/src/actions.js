export const FETCH_REQUEST = "FETCH_REQUEST";
export const FETCH_SUCCESS = "FETCH_SUCCESS";
export const FETCH_FAILURE = "FETCH_FAILURE";

export const fetchRequest = () => ({
  type: FETCH_REQUEST,
});

export const fetchSuccess = ({ payload }) => ({
  type: FETCH_SUCCESS,
  payload,
});

export const fetchFailure = ({ payload }) => ({
  type: FETCH_FAILURE,
  payload,
});
