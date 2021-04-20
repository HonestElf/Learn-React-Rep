import { Fragment } from "react";
import { connect } from "react-redux";

import QuestionForm from "./form";
import Answers from "../Answers";

import {
  fetchRequest,
  getError,
  getQuestions,
  getIsSearching,
  answersRequest,
  getAnswersFetching,
  getAnswersArr,
  getAnswersErrors,
} from "../../ducks";

import { Button } from "@material-ui/core";

const MainPage = (props) => {
  const { fetchRequest, questions, answersArr, answersRequest } = props;
  console.log("answersArr: ", answersArr);
  const onFormSubmit = (values) => {
    if (values.section === "section0") {
      console.log("submit called with :", values);
      fetchRequest(values);

      let costul = Object.keys(values)[Object.keys(values).length - 1].slice(
        0,
        8
      );
      values.section = costul;
    } else {
      let costul = Object.keys(values)[Object.keys(values).length - 1].slice(
        0,
        8
      );
      values.section = costul;
      console.log("submit called with :", values);
      fetchRequest(values);
    }
  };

  const getAnswersHandle = () => {
    console.log("getAnswers called");
    answersRequest();
  };
  return (
    <Fragment>
      <QuestionForm onSubmit={onFormSubmit} questions={questions} />
      <Button onClick={getAnswersHandle} variant="contained" color="secondary">
        Показать ответы
      </Button>
      {answersArr &&
        answersArr.map((point, index) => (
          <Answers
            key={index}
            secName={Object.keys(point)[0]}
            secVal={point[Object.keys(point)[0]]}
          />
        ))}
    </Fragment>
  );
};

const mapStateToProps = (state) => ({
  isSearching: getIsSearching(state),
  questions: getQuestions(state),
  error: getError(state),
  answersFetching: getAnswersFetching(state),
  answersArr: getAnswersArr(state),
  answersErrors: getAnswersErrors(state),
});

const mapDispatchToProps = {
  fetchRequest,
  answersRequest,
};

export default connect(mapStateToProps, mapDispatchToProps)(MainPage);
