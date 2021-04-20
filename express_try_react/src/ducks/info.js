import { createActions, handleActions } from "redux-actions";
import { combineReducers } from "redux";

const { fetchRequest, fetchSuccess, fetchFailure } = createActions(
  "FETCH_REQUEST",
  "FETCH_SUCCESS",
  "FETCH_FAILURE"
);

export { fetchRequest, fetchSuccess, fetchFailure };

export const isSearching = handleActions(
  {
    [fetchRequest]: () => true,
    [fetchSuccess]: () => false,
    [fetchFailure]: () => false,
  },
  false
);

export const questions = handleActions(
  {
    [fetchRequest]: () => null,
    [fetchSuccess]: (state, action) => action.payload,
    [fetchFailure]: () => null,
  },
  []
);

export const error = handleActions(
  {
    [fetchRequest]: () => null,
    [fetchSuccess]: () => null,
    [fetchFailure]: (state, action) => action.payload.message,
  },
  null
);

export const getIsSearching = (state) => state.info.isSearching;
export const getError = (state) => state.info.error;
export const getQuestions = (state) => state.info.questions;

export default combineReducers({
  isSearching,
  questions,
  error,
});
