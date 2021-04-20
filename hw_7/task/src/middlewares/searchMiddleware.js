import { searchRequest, searchSuccess, searchFailure } from '../actions/search';
import { search } from '../api';

const seacrhMiddleware = store => next => action => {
  console.log('from searchMiddleware: ', action);

  if (action.type === searchRequest.toString()) {
    console.log('search payload: ', action.payload);
    search(action.payload)
      .then(data => {
        store.dispatch(searchSuccess(data, data.length));
      })
      .catch(error => {
        store.dispatch(searchFailure(error));
      });
  }

  return next(action);
};
export default seacrhMiddleware;
