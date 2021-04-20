import { call, put, takeLatest } from "redux-saga/effects";

import { fetchFailure, fetchSuccess, fetchRequest } from "../ducks";

import { getQuestion } from "../api";

function* infoSaga(action) {
  try {
    let response;

    response = yield call(getQuestion, action.payload);
    console.log("response from saga: ", response);

    yield put(fetchSuccess(response));
  } catch (error) {
    console.log("error from saga: ", error);
    yield put(fetchFailure(error));
  }
}

export default function* fetchQuestionWatch() {
  yield takeLatest(fetchRequest.toString(), infoSaga);
}
