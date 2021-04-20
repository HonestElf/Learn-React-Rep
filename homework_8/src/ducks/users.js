import { handleActions, createActions } from "redux-actions";
import { combineReducers } from "redux";

export const { userRequest, userSuccess, userFailure } = createActions(
  "USER_REQUEST",
  "USER_SUCCESS",
  "USER_FAILURE"
);

const isFetching = handleActions(
  {
    [userRequest]: () => true,
    [userSuccess]: () => false,
    [userFailure]: () => false,
  },
  false
);

const isFetched = handleActions(
  {
    [userRequest]: () => false,
    [userSuccess]: () => true,
    [userFailure]: () => true,
  },
  false
);

const data = handleActions(
  {
    [userRequest]: () => null,
    [userSuccess]: (state, action) => state.concat(action.payload),
    [userFailure]: () => null,
  },
  []
);
const error = handleActions(
  {
    [userRequest]: () => null,
    [userSuccess]: () => null,
    [userFailure]: (state, action) => action.payload,
  },
  []
);

export const getIsFetching = (state) => state.users.isFetching,
  getIsFetched = (state) => state.users.isFetched,
  getData = (state) => state.users.data,
  getError = (state) => state.users.error;

export default combineReducers({
  isFetching,
  isFetched,
  data,
  error,
});
