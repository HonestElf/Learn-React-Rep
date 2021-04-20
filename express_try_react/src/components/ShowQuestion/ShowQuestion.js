import React from "react";
import { Field } from "redux-form";

import {
  TextField,
  Checkbox,
  Radio,
  RadioGroup,
  FormControlLabel,
  Select,
  MenuItem,
} from "@material-ui/core";

import "./questionStyles.css";

const renderTextField = ({
  input,
  label,
  meta: { touched, error },
  ...custom
}) => (
  <div>
    <TextField
      helperText={touched && error ? error : "Example: " + label}
      placeholder={"Type your answer"}
      error={touched && error}
      {...input}
      {...custom}
    />
  </div>
);

const renderCheckbox = ({
  input,
  label,
  meta: { touched, error },
  ...rest
}) => (
  <div>
    <Checkbox
      {...input}
      {...rest}
      label={label}
      checked={input.value ? true : false}
      onChange={input.onChange}
    />
    <span>{label}</span>
    {touched && error && <div className="validateNote"> sdfsdf</div>}
  </div>
);

const renderRadioGroup = ({ input, meta: { touched, error }, ...rest }) => (
  <div>
    <RadioGroup
      {...input}
      {...rest}
      value={input.value}
      onChange={(event, value) => input.onChange(value)}
    />
    {touched && error && <div className="validateNote">{error}</div>}
  </div>
);

const renderSelectField = ({
  input,
  label,
  meta: { touched, error },
  children,
  ...custom
}) => (
  <Select {...input} {...custom} value={input.value}>
    {children}
  </Select>
);

const FileQuestion = ({ input: { onChange }, label }) => {
  const handleFileSelect = React.useCallback(
    (event) => {
      const files = event.target.files;
      console.warn(files[0]);
      const file = files[0];

      const reader = new FileReader();

      reader.onloadend = function () {
        onChange(reader.result.split(":")[1]);
      };

      reader.readAsDataURL(file);
    },
    [onChange]
  );

  return (
    <div>
      <input id="file-selector" type="file" onChange={handleFileSelect} />
    </div>
  );
};

const renderDateField = ({
  input,
  label,
  meta: { touched, error },
  ...custom
}) => (
  <TextField
    helperText={"Example: " + label}
    placeholder={"Type your answer"}
    type="date"
    {...input}
    {...custom}
  />
);

const ShowQuestion = (props) => {
  const { uniqId, num, type, text, options, section } = props;

  switch (type) {
    case "simpleText":
      return (
        <div>
          <label>
            Question # {num} from {section}
          </label>
          <p>{text}</p>
          <Field name={uniqId} component={renderTextField} label={type} />
        </div>
      );
    case "check":
      return (
        <div>
          <label>
            Question # {num} from {section}
          </label>
          <p>{text}</p>
          <div>
            {options &&
              options.map((point, index) => (
                <Field
                  name={uniqId + point}
                  component={renderCheckbox}
                  label={point}
                  key={index}
                />
              ))}
          </div>
          <br />
        </div>
      );
    case "radio":
      return (
        <div>
          <label>
            Question # {num} from {section}
          </label>
          <p>{text}</p>
          <div>
            <Field name={uniqId} component={renderRadioGroup}>
              {options &&
                options.map((point, index) => (
                  <FormControlLabel
                    value={point}
                    control={<Radio />}
                    label={point}
                    key={index}
                  />
                ))}
            </Field>
          </div>
          <br />
        </div>
      );
    case "text-area":
      return (
        <div>
          <label>
            Question # {num} from {section}
          </label>
          <p>{text}</p>
          <div>
            <Field
              name={uniqId}
              component={renderTextField}
              label={type}
              multiline
              rows={2}
            >
              {options &&
                options.map((point, index) => (
                  <MenuItem value={point} key={index}>
                    {point}
                  </MenuItem>
                ))}
            </Field>
          </div>
          <br />
        </div>
      );
    case "selector":
      return (
        <div>
          <label>
            Question # {num} from {section}
          </label>
          <p>{text}</p>
          <div>
            <Field name={uniqId} component={renderSelectField}>
              {options &&
                options.map((point, index) => (
                  <MenuItem value={point} key={index}>
                    {point}
                  </MenuItem>
                ))}
            </Field>
          </div>
          <br />
        </div>
      );

    case "multi-selector":
      return (
        <div>
          <label>
            Question # {num} from {section}
          </label>
          <p>{text}</p>
          <div>
            <Field
              name={uniqId}
              component={renderSelectField}
              multiple={true}
              type="select-multiple"
            >
              {options &&
                options.map((point, index) => (
                  <MenuItem value={point} key={index}>
                    {point}
                  </MenuItem>
                ))}
            </Field>
          </div>
          <br />
        </div>
      );

    case "file":
      return (
        <div>
          <label>
            Question # {num} from {section}
          </label>
          <p>{text}</p>
          <div>
            <Field name={uniqId} component={FileQuestion} />
          </div>
          <br />
        </div>
      );

    case "date":
      return (
        <div>
          <label>
            Question # {num} from {section}
          </label>
          <p>{text}</p>
          <Field name={uniqId} component={renderDateField} />
        </div>
      );

    case "end":
      return (
        <div>
          <p>Thank you for your answers</p>
        </div>
      );

    default:
      return <div>Something's wrong</div>;
  }
};

export default ShowQuestion;
