import React, { Component, Fragment } from "react";
import ReactDOM from "react-dom";
import "./index.css";
//общение родителей и детей, изучаем порталы

import PropTypes from "prop-types";

// import App from './App';
// import reportWebVitals from './reportWebVitals';
class ModalWindow extends Component {
  static newPropTypes = {
    children: PropTypes.node.isRequired,
  };

  render() {
    const { children } = this.props;
    return ReactDOM.createPortal(children, document.querySelector("#portal"));
  }
}

class Comp extends Component {
  state = {
    childVar: 1,
  };

  static propTypes = {
    myName: PropTypes.string.isRequired,
  };

  static defaultProps = {
    myName: "No name",
  };

  handleClick = () => {
    this.props.onChangeSomething(this.state.childVar);
  };
  render() {
    const { childVar } = this.state;
    const { myName } = this.props;
    return (
      <Fragment>
        <div> Comp, {childVar}</div>
        <div> Using Prop-types: hello, {myName}</div>
        <button onClick={this.handleClick}>Child Button</button>
      </Fragment>
    );
  }
}

class App extends Component {
  state = {
    var1: 1,
    varForA: 0,
    varForB: 0,
    value: 0,
  };

  handleClick = (event) => {
    console.log(event.target);
    console.log(event.currentTarget);
  };
  handleChildDoSomethingA = (someDataFromChild) => {
    console.log(someDataFromChild + 3);
  };
  handleChildDoSomethinB = (someDataFromChild) => {
    console.log(someDataFromChild + 10);
  };

  handleChange = (event) => {
    this.setState({ value: event.target.value });
    console.log("Current value is: ", this.state.value);
  };

  handleAltclick = (event) => {
    console.log(event.target, event.currentTarget);
  };

  render() {
    // const { var1 } = this.state;
    return (
      // <div onClick={this.handleClick}>
      // <button> Click here</button>
      // </div>
      <div>
        <Comp
          myName="asf1"
          onChangeSomething={this.handleChildDoSomethingA}
          variable={this.state.varForA}
        />{" "}
        <Comp
          // myName="asf2"
          // myName={123}
          onChangeSomething={this.handleChildDoSomethinB}
          variable={this.state.varForB}
        />{" "}
        <input value={this.state.value} onChange={this.handleChange}></input>
        <div
          onClick={this.handleAltclick}
          ref={(c) => (this.container = c)}
          className="empty-div"
        >
          <ModalWindow>
            <Comp onChangeSomething={this.handleChildDoSomethinB} />
          </ModalWindow>
        </div>
      </div>
    );
  }
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
