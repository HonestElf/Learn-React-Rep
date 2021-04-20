import { createStore } from "redux";
import rootReducer from "./reducers";

export default (initState) =>
  createStore(
    rootReducer,
    initState,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );
