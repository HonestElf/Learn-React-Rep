import { searchFailure, searchRequest, searchSuccess } from '../actions/search';
import { handleActions } from 'redux-actions';
// import { combineReducers } from 'redux';
import { createSelector } from 'reselect';

export default handleActions(
  {
    [searchRequest]: state => ({
      ...state,
      isSearching: true
    }),
    [searchSuccess]: (state, action) => ({
      ...state,
      isSearching: false,
      tvSeries: action.payload
    }),
    [searchFailure]: (state, action) => ({
      ...state,
      isSearching: false,
      error: action.error
    })
  },
  { isSearching: false, tvSeries: [], error: null }
);

export const getIsSearching = state => {
  // console.log(state.tvSeries);
  return state.isSearching;
};
// export const getTvSeries = state => {
//   console.log(state.tvSeries);
//   console.log('undef', state.tvSeries === undefined);
//   // return state.tvSeries;
//   return state.tvSeries === undefined ? [] : state.tvSeries;
// };

export const getTvSeries = createSelector(
  state => state.search.tvSeries,
  tvSeries =>
    tvSeries.map(serial => ({
      id: serial.id,
      name: serial.name,
      image: serial.image,
      summary: serial.summary
    }))
);

export const getError = state => state.error;

// const isSearching = handleActions(
//   {
//     [searchRequest]: () => true,
//     [searchSuccess]: () => false,
//     [searchFailure]: () => false
//   },
//   false
// );

// const tvSeries = handleActions(
//   {
//     [searchSuccess]: () => (state, action) => state.concat(action.payload)
//   },
//   false
// );

// const tvError = handleActions(
//   {
//     [searchRequest]: () => null,
//     [searchSuccess]: () => null,
//     [searchFailure]: () => (state, action) => action.payload
//   },
//   false
// );

// export default combineReducers({
//   isSearching,
//   tvSeries,
//   tvError
// });

// export const getIsSearching = state => state.isSearching;
// export const getIsSearchComplete = state => state.searchComplete;
// export const getTvSeries = state => state.tvSeries;
// export const getTvError = state => state.tvError;

//не робит, понять почему, скорее всего делао в задании экшенов

// const initState = {
//   isSearching: false,
//   searchComplete: true,
//   tvSeries: [],
//   error: null
// };

// const fn = (state = { initState }, action) => {
//   switch (action.type) {
//     case searchRequest.toString():
//       return {
//         ...state,
//         isSearching: true,
//         searchComplete: false,
//         error: null
//       };
//     case searchSuccess.toString():
//       return {
//         ...state,
//         isSearching: false,
//         searchComplete: true,
//         error: null,
//         images: action.payload
//       };
//     case searchFailure.toString():
//       return {
//         ...state,
//         isSearching: false,
//         searchComplete: true,
//         error: action.payload
//       };

//     default:
//       return state;
//   }
// };

// export default fn;
