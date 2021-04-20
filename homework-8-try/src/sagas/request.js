import { call, put, select } from "redux-saga/effects";
import {
  getIsNetworkErrorPresent,
  clearNetworkErrors,
  networkError,
} from "../ducks/network";
import { logout } from "../ducks/auth";

// eslint-disable-next-line import/no-anonymous-default-export
export default function* (fn, args) {
  try {
    if (yield select(getIsNetworkErrorPresent)) {
      yield put(clearNetworkErrors());
    }

    return yield call(fn, args);
  } catch (error) {
    yield put(networkError(error));
    if ([401, 403].includes(error.response.status)) {
      yield put(logout());
    }

    throw error;
  }
}

// b6f4b096ebe2d02c447d299e1c78577aa8296e44
