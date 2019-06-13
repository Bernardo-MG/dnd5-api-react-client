import * as types from 'books/actions/types';

const books = (state = { books: {} }, action) => {
   const { type } = action;
   let { payload } = action;

   if (payload === undefined) {
      payload = [];
   }

   switch (type) {
   case types.CLEAR_BOOKS:
      return {
         ...state,
         books: {}
      };
   case types.ADD_BOOKS:
      return {
         ...state,
         books: { ...state.books, ...payload }
      };
   default:
      return state;
   }
};

export default books;
