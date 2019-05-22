import { SEARCH_COMIC, SEARCH_COMIC_SUCCESS, SEARCH_COMIC_FAILURE } from 'search/actions/types';

export const searchComic = (value) => {
   return {
      type: SEARCH_COMIC,
      query: value
   };
};

export const success = (payload) => {
   return {
      type: SEARCH_COMIC_SUCCESS,
      payload
   };
};

export const failure = (payload) => {
   return {
      type: SEARCH_COMIC_FAILURE,
      payload
   };
};
