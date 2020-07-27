import * as types from 'requests/actions/types';

export const requestFailure = (payload) => {
   return {
      type: types.REQUEST_FAILURE,
      payload
   };
};
