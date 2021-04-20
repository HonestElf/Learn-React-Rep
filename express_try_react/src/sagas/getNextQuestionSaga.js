import { call, put, takeLatest } from "redux-saga/effects";

import { fetchRequest, fetchSuccess, fetchFailure } from "../ducks";

import { getNextQuestions } from "../api";

function* getNextQuestionSaga(action) {
  try {
    console.log("action in getNextQuestionSaga");
    let response = yield call(getNextQuestions, action.payload);
    console.log("response from getNextQuestionSaga: ", response);
    yield put(fetchSuccess(response));
  } catch (error) {
    console.log("error form getNextQuestionSaga: ", error);
    yield put(fetchFailure(error));
  }
}

export default function* fetchNextQuestionWatch() {
  yield takeLatest(fetchRequest.toString(), getNextQuestionSaga);
}
