import { createStore } from "redux";
import rootReducer from "./reducers";
const fn = () =>
  createStore(
    rootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );

export default fn;
