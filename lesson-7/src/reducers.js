// import { FETCH_REQUEST, FETCH_SUCCESS, FETCH_FAILURE } from "./actions";

import { fetchRequest, fetchSuccess, fetchFailure } from "./actions";
import { handleActions } from "redux-actions";
import { combineReducers } from "redux";
import { createSelector } from "reselect";

const isFetching = handleActions(
  {
    [fetchRequest]: () => true,
    [fetchSuccess]: () => false,
    [fetchFailure]: () => false,
  },
  false
);

const isFetched = handleActions(
  {
    [fetchRequest]: () => false,
    [fetchSuccess]: () => true,
    [fetchFailure]: () => true,
  },
  false
);

const images = handleActions(
  {
    [fetchSuccess]: (state, action) => state.concat(action.payload),
  },
  []
);

const error = handleActions(
  {
    [fetchRequest]: () => null,
    [fetchSuccess]: () => null,
    [fetchFailure]: (state, action) => action.payload,
  },
  null
);

export default combineReducers({
  isFetching,
  isFetched,
  images,
  error,
});

// альтернативный способ

// const initState = {
//   isLoading: false,
//   images: [],
//   error: null,
// };

// const fn = (state = { initState }, action) => {
//   switch (action.type) {
//     case fetchRequest.toString():
//       return { ...state, isLoading: true };

//     case fetchSuccess.toString():
//       return { ...state, isLoading: false, images: action.payload };

//     case fetchFailure.toString():
//       return { ...state, isLoading: false, error: action.payload };

//     default:
//       return state;
//   }
// };

// export default fn;

export const getIsLoading = (state) => state.isFetching;
export const getIsLoaded = (state) => state.isFetched;
// чтобы вытянуть первые 5 картинок
// export const getImages = (state) => state.images.slice(0, 5);

//а вот эта функция проверяет изменилось ли значение,
//если нет - повторного вычисления функции не будет
//А будет возвращен результат предыдущего вычисления
export const getImages = createSelector(
  (state) => state.images,
  (images) => {
    console.log("call reselect");
    return images.slice(0, 5);
  }
);
// export const getImages = (state) => state.Images;

export const getError = (state) => state.error;
