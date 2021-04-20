import { createActions } from 'redux-actions';

// const {
//   show: { showRequest, showSuccess, showFailure }
// } = createActions(
//   {
//     SHOW: {
//       SHOW_REQUEST: undefined,
//       SHOW_SUCCESS: data => data,
//       SHOW_FAILURE: undefined
//     }
//   },
//   { namespace: '--' }
// );

export const { showRequest, showSuccess, showFailure } = createActions(
  'SHOW_REQUEST',
  'SHOW_SUCCESS',
  'SHOW_FAILURE'
);

// export default { showRequest, showSuccess, showFailure };
