import { combineReducers } from "redux";
import info from "./info";
import getAnswers from "./getAnswers";
import { reducer as formReducer } from "redux-form";

export {
  fetchRequest,
  fetchSuccess,
  fetchFailure,
  getIsSearching,
  getQuestions,
  getError,
} from "./info";

export {
  answersRequest,
  answersSuccess,
  answersFailure,
  getAnswersFetching,
  getAnswersArr,
  getAnswersErrors,
} from "./getAnswers";

export default combineReducers({
  info,
  getAnswers,
  form: formReducer,
});
