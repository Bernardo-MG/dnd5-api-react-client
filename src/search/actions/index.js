import { SEARCH_COMIC } from 'search/actions/actionTypes';

export const searchComic = (value) => {
   return {
      type: SEARCH_COMIC,
      query: value
   };
};
