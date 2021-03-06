import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import { increment, decrement } from "./actions/counter";
import { connect } from "react-redux";

class App extends Component {
  render() {
    const { counter, increment, decrement } = this.props;
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>

          <div>
            <h3> Counter with state</h3>
            <p>{counter}</p>

            <button onClick={increment}>+</button>
            <button onClick={decrement}>-</button>
          </div>
        </header>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({ counter: state.counter });

const mapDispatchToProps = {
  increment,
  decrement,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
