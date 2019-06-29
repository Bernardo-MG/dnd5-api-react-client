import * as types from 'search/actions/types';

export const search = (payload) => {
   return {
      type: types.SEARCH_BOOK,
      payload
   };
};

export const success = (payload) => {
   return {
      type: types.SEARCH_BOOK_SUCCESS,
      payload
   };
};

export const failure = (payload) => {
   return {
      type: types.SEARCH_BOOK_FAILURE,
      payload
   };
};
