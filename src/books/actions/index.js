import { ADD_BOOKS } from 'books/actions/types';

export const addBooks = (payload) => {
   return {
      type: ADD_BOOKS,
      payload
   };
};
