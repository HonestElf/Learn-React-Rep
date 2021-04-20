import { createActions, handleActions } from "redux-actions";
import { combineReducers } from "redux";

const { answersRequest, answersSuccess, answersFailure } = createActions(
  "ANSWERS_REQUEST",
  "ANSWERS_SUCCESS",
  "ANSWERS_FAILURE"
);

export { answersRequest, answersSuccess, answersFailure };

export const answersFetching = handleActions(
  {
    [answersRequest]: () => true,
    [answersSuccess]: () => false,
    [answersFailure]: () => false,
  },
  false
);

export const answersArr = handleActions(
  {
    [answersRequest]: () => null,
    [answersSuccess]: (state, action) => action.payload,
    [answersFailure]: () => null,
  },
  []
);
export const answersErrors = handleActions(
  {
    [answersRequest]: () => null,
    [answersSuccess]: () => null,
    [answersFailure]: (state, action) => action.payload.message,
  },
  null
);

export const getAnswersFetching = (state) => state.getAnswers.answersFetching;
export const getAnswersArr = (state) => state.getAnswers.answersArr;
export const getAnswersErrors = (state) => state.getAnswers.answersErrors;

export default combineReducers({ answersFetching, answersArr, answersErrors });
