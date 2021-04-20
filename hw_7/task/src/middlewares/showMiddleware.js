import { showRequest, showSuccess, showFailure } from '../actions/show';
import { show } from '../api';

const seacrhMiddleware = store => next => action => {
  console.log('from showMiddleware: ', action);

  if (action.type === showRequest.toString()) {
    console.log('show payload: ', action.payload);
    show(action.payload)
      .then(data => {
        store.dispatch(showSuccess(data));
      })
      .catch(error => {
        store.dispatch(showFailure(error));
      });
  }

  return next(action);
};
export default seacrhMiddleware;
