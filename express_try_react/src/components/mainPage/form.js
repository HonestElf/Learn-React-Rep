import { reduxForm, reset } from "redux-form";
import { Fragment } from "react";

import ShowQuestion from "../ShowQuestion";

import { Button } from "@material-ui/core";

// const afterSubmit = (result, dispatch) => {
//   dispatch(reset("QuestionForm"));
// };

const validate = (values) => {
  const errors = {};
  if (!values.section10) {
    errors.section10 = "Required";
  } else if (values.section10.length > 15) {
    errors.section10 = "Must be 15 characters or less";
  }

  if (!values.section11) {
    errors.section11 = "Required";
  }
  if (!values.section12) {
    errors.section12 = "Required";
  }

  if (values.section12 === "art") {
    if (!values.section20Stroganov || !values.section20VGIK) {
      errors.univer = "Required";
    }
  }

  console.log("errors: ", errors);

  return errors;
};
let QuestionForm = (props) => {
  const { handleSubmit, questions } = props;
  let buttonHidden = false;
  let buttonName = "";
  if (questions == null || questions.length === 0) buttonName = "Start";
  else if (questions[0].type === "end") buttonHidden = true;
  else buttonName = "Submit";

  return (
    <Fragment>
      <h2>QuestionForm</h2>
      <form onSubmit={handleSubmit}>
        {questions &&
          questions.map((point, index) => (
            <ShowQuestion
              section={point.section}
              uniqId={point.section + point.questionNum}
              num={point.questionNum}
              type={point.type}
              text={point.text}
              options={point.options}
              key={index}
            />
          ))}
        <Button type="submit" variant="contained" color="primary">
          {buttonName}
        </Button>
      </form>
    </Fragment>
  );
};
// <button type="submit" hidden={buttonHidden}>
//           {buttonName}
//         </button>

QuestionForm = reduxForm({
  form: "QuestionForm",
  initialValues: {
    section: "section0",
  },
  // onSubmitSuccess: afterSubmit,
  validate,
})(QuestionForm);

export default QuestionForm;
