import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import getStore from "./store";
import { Provider } from "react-redux";

const store = getStore();

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
