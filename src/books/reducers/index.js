import * as types from 'books/actions/types';

const books = (state = { books: {} }, action) => {
   switch (action.type) {
   case types.ADD_BOOKS:
      return {
         ...state,
         books: { ...state.books, ...action.payload }
      };
   default:
      return state;
   }
};

export default books;
