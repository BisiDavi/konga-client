import * as actiontypes from './actiontypes';
import * as api from '../api';

const AsyncFetchtask = products => {
  return {
    type: actiontypes.FETCH_PRODUCTS,
    payload: {
      products: [products]
    }
  };
};

export const FetchProducts = () => {
  return dispatch => {
    api.fetchData().then(res => {
      dispatch(AsyncFetchtask(res.data));
    });
  };
};
