import { combineReducers } from "redux";
import { handleActions } from "redux-actions";

const isAuthorized = handleActions({}, true);

export default combineReducers({
  isAuthorized,
});

export const getIsAuthorized = (state) => state.isAuthorized;
