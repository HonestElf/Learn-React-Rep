import { showFailure, showRequest, showSuccess } from '../actions/show';
import { handleActions } from 'redux-actions';
// import { combineReducers } from 'redux';

export default handleActions(
  {
    [showRequest.toString()]: state => ({
      ...state,
      isShowing: true
    }),
    [showSuccess.toString()]: (state, action) => ({
      ...state,
      isShowing: false,
      entity: action.payload
    }),
    [showFailure.toString()]: state => ({
      ...state,
      isShowing: false
    })
  },
  { entity: {}, isShowing: false }
);

//понять, почему не работает

// const isShowing = handleActions(
//   {
//     [showRequest]: () => true,
//     [showSuccess]: () => false,
//     [showFailure]: () => false
//   },
//   false
// );

// const tvSeries = handleActions(
//   {
//     [showSuccess]: () => (state, action) => state.concat(action.payload)
//   },
//   false
// );

// const tvError = handleActions(
//   {
//     [showRequest]: () => null,
//     [showSuccess]: () => null,
//     [showFailure]: () => (state, action) => action.payload
//   },
//   false
// );

// export default combineReducers({
//   isShowing,
//   tvSeries,
//   tvError
// });

// export const getIsShowing = state => state.isSearching;
// export const getTvSeries = state => state.tvSeries;
// export const getTvError = state => state.tvError;
