import { SEARCH, SEARCH_SUCCESS, SEARCH_FAILURE, SET_PAGE, SET_TOTAL } from 'search/actions/types';

export const searchComic = (payload) => {
   return {
      type: SEARCH,
      payload
   };
};

export const success = (payload) => {
   return {
      type: SEARCH_SUCCESS,
      payload
   };
};

export const failure = (payload) => {
   return {
      type: SEARCH_FAILURE,
      payload
   };
};

export const setPage = (payload) => {
   return {
      type: SET_PAGE,
      payload
   };
};

export const setTotal = (payload) => {
   return {
      type: SET_TOTAL,
      payload
   };
};
