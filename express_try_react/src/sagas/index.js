import { fork } from "@redux-saga/core/effects";
// import infoSaga from "./infoSaga";
import getNextQuestionSaga from "./getNextQuestionSaga";
import getAnswersSaga from "./getAnswersSaga";

function* rootSaga() {
  // yield fork(infoSaga);
  yield fork(getAnswersSaga);
  yield fork(getNextQuestionSaga);
}

export default rootSaga;
