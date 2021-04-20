import { handleActions, createActions } from "redux-actions";
import { combineReducers } from "redux";

export const {
  followersRequest,
  followersSuccess,
  followersFailure,
} = createActions(
  "FOLLOWERS_REQUEST",
  "FOLLOWERS_SUCCESS",
  "FOLLOWERS_FAILURE"
);

const isFetching = handleActions(
  {
    [followersRequest]: () => true,
    [followersSuccess]: () => false,
    [followersFailure]: () => false,
  },
  false
);

const isFetched = handleActions(
  {
    [followersRequest]: () => false,
    [followersSuccess]: () => true,
    [followersFailure]: () => true,
  },
  false
);

const id = handleActions(
  {
    [followersRequest]: () => null,
    [followersSuccess]: (state, action) => action.payload,
    [followersFailure]: () => null,
  },
  []
);
const error = handleActions(
  {
    [followersRequest]: () => null,
    [followersSuccess]: () => null,
    [followersFailure]: (state, action) => action.payload,
  },
  []
);

export const getFollowersIsFetching = (state) => state.followers.isFetching,
  getFollowersIsFetched = (state) => state.followers.isFetched,
  getFollowersId = (state) => state.followers.id,
  getFollowersError = (state) => state.followers.error;

export default combineReducers({
  isFetching,
  isFetched,
  id,
  error,
});
