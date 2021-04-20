import "./App.css";
import { Component } from "react";
import { Field, Form } from "react-final-form";
import Input from "./input";

class App extends Component {
  state = {
    first_name: "",
    last_name: "",
    email: "",
    send_email: "",
  };

  handleSubmit = (values) => {
    console.log(values);
  };
  validate = (values) => {
    console.log(values);
    const errors = {};
    if (Object.keys(values).includes("last_name")) {
      if (values.last_name.length < 3) {
        errors.last_name = "Last name must be more than 3 elements";
      }
    }
    return errors;
  };

  render() {
    return (
      <header className="App-header">
        <Form
          initialValues={{
            user: {
              first_name: "Name",
              last_name: "Last Name",
            },
          }}
          validate={this.validate}
          onSubmit={this.handleSubmit}
          render={({ handleSubmit, values }) => (
            <form onSubmit={handleSubmit}>
              <Field name="user.first_name" component={Input} />
              <br />
              <Field name="user.last_name" component={Input} />
              <br />
              <Field name="major.email" component={Input} />
              <br />
              <Field
                name="send_email"
                type="checkbox"
                value
                render={({ input }) => (
                  <label>
                    send me email
                    <input
                      type="checkbox"
                      // checked={input.value}
                      onChange={input.onChange}
                    />
                  </label>
                )}
              />
              <br />
              <button type="submit">Submit</button>
              <pre>{JSON.stringify(values, null, 2)}</pre>
            </form>
          )}
        />
      </header>
    );
  }
}

export default App;
