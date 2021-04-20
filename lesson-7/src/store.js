import { createStore, applyMiddleware, compose } from "redux";
// import { fetchFailure, fetchSuccess, FETCH_REQUEST } from "./actions";
import { fetchFailure, fetchSuccess, fetchRequest } from "./actions";
import rootReducer from "./reducers";

const fetchMiddleware = (store) => (next) => (action) => {
  console.log("from middleware ", action);

  if (action.type === fetchRequest.toString()) {
    fetch("http://api.tvmaze.com/shows/180/episodes", {
      method: "GET",
      mode: "cors",
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        const images = data.map((ep) => ep.image.medium);
        // console.log("Store images: ", images);
        store.dispatch(fetchSuccess(images, images.length));
      })
      .catch((error) => {
        store.dispatch()(fetchFailure(error));
      });
  }

  return next(action);
};
const fn = (initState) =>
  createStore(
    rootReducer,
    initState,
    compose(
      applyMiddleware(fetchMiddleware),
      window.__REDUX_DEVTOOLS_EXTENSION__ &&
        window.__REDUX_DEVTOOLS_EXTENSION__()
    )
  );

export default fn;

// state
//action1 =>store => middleware => reducers => state1
//action2 =>store => middleware => reducers => state2
