import { fork } from "redux-saga/effects";
import { fetchUserWatch } from "./users";
import { authFlow } from "./auth";
import { fetchFollowersWatch } from "./followers";

// eslint-disable-next-line import/no-anonymous-default-export
export default function* () {
  yield fork(authFlow);
  yield fork(fetchUserWatch);
  yield fork(fetchFollowersWatch);
}
