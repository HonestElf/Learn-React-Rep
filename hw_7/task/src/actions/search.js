import { createActions } from 'redux-actions';

export const {
  search: { searchRequest, searchSuccess, searchFailure }
} = createActions(
  {
    SEARCH: {
      SEARCH_REQUEST: undefined,
      SEARCH_SUCCESS: [images => images, (_, length) => ({ length })], //спросить про конструкцию
      SEARCH_FAILURE: undefined
    }
  },
  { namespace: '-' }
);
// const { searchRequest, searchSuccess, searchFailure } = createActions(
//   'SEARCH_REQUEST',
//   'SEARCH_SUCCESS',
//   'SEARCH_FAILURE'
// );
// export default { searchRequest, searchSuccess, searchFailure };
