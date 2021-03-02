import React, { Component } from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { Provider, connect } from "react-redux";
import createStore from "./store";
import { increment, decrement } from "./actions/counter";

const store = createStore();

class App extends Component {
  state = {
    counter: 0,
  };

  // dispatch = (action) => {
  //   this.setState((state) => ({ counter: counter(state.counter, action) }));
  // };

  // <button onClick={() => this.dispatch({ type: "INCREMENT" })}>+</button>
  // <button onClick={() => this.dispatch({ type: "DECREMENT" })}>-</button>

  render() {
    const { counter, increment, decrement } = this.props;
    return (
      <div>
        <h3> Counter with state</h3>
        <p>{counter}</p>

        <button onClick={increment}>+</button>
        <button onClick={decrement}>-</button>
      </div>
    );
  }
}
const mapStateToProps = (state) => ({ counter: state.counter });

const mapDispatchToProps = {
  increment,
  decrement,
};

const AppWithConnect = connect(mapStateToProps, mapDispatchToProps)(App);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <AppWithConnect />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

const initUserState = {
  isAuthorized: false,
  email: null,
  firstName: null,
  lastName: null,
};

const initPostState = {
  ids: [
    {
      id: 1,
      title: "My first post!",
      body: "Hello Worls!",
    },
  ],
};

const user = (state = initUserState, action) => {
  switch (action.type) {
    case "USER_AUTHORIZED":
      return state;
    case "USER_UNAUTHORIZED":
      return state;

    default:
      return state;
  }
};

const posts = (state = initPostState, action) => {
  switch (action.type) {
    case "INCREMENT":
      return { ...state, ids: [...state.ids, ...state.ids] }; //удваивает количество постов

    default:
      return state;
  }
};

// const counter = (state = 0, action) => {
//   switch (action.type) {
//     case "INCREMENT":
//       return state + 1;

//     case "DECREMENT":
//       return state - 1;

//     default:
//       return state;
//   }
// };

// const rootReducer = combineReducers({
//   user,
//   posts,
//   counter,
// });

// const store = createStore(rootReducer);
// console.log(store.getState());

// const unsubscribe = store.subscribe(() => {
//   console.log(store.getState());
// });
// store.dispatch({ type: "INCREMENT" });
// store.dispatch({ type: "INCREMENT" });
// store.dispatch({ type: "DECREMENT" });

// unsubscribe();
