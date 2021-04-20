import { call, put, select } from "redux-saga/effects";
import {
  getIsNetworkErrorPresent,
  clearNetworkErrors,
  networkError,
} from "../ducks";
import { logout } from "../ducks";

// eslint-disable-next-line import/no-anonymous-default-export
export default function* (fn, args) {
  try {
    const response = yield call(fn, args);
    if (yield select(getIsNetworkErrorPresent)) yield put(clearNetworkErrors());
    return response;
  } catch (error) {
    yield put(networkError(error));
    if (error.response.status === 401) yield put(logout());

    throw error;
  }
}
