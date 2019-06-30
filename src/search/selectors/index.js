import { createSelector } from 'reselect';
import { selectBooks } from 'books/selectors';

const filterByKeys = (map, keys) => {
   const result = [];

   keys.forEach((k) => {
      if (k in map) {
         result.push(map[k].title);
      }
   });

   return result;
};

export const selectBookIds = (state) =>
   state.search.bookIds;

export const selectSearchedBooks = createSelector(
   selectBooks,
   selectBookIds,
   (data, ids) =>
      filterByKeys(data, ids)
);
