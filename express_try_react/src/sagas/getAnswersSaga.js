import { call, put, takeLatest } from "redux-saga/effects";

import { answersRequest, answersSuccess, answersFailure } from "../ducks";

import { getAnswers } from "../api";

function* getAnswersSaga(action) {
  try {
    console.log("action in getAnswersSaga");
    let response = yield call(getAnswers);
    console.log("response from getAnswersSaga: ", response);
    yield put(answersSuccess(response));
  } catch (error) {
    console.log("error from getAnswersSaga: ", error);
    yield put(answersFailure(error));
  }
}

export default function* fetchAnswersWatch() {
  yield takeLatest(answersRequest.toString(), getAnswersSaga);
}
