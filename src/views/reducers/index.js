import * as types from 'search/actions/types';

const views = (state = { searchingBooks: false }, action) => {
   switch (action.type) {
   case types.SEARCH_BOOK:
      return {
         ...state,
         searchingBooks: true
      };
   case types.SEARCH_BOOK_SUCCESS:
   case types.SEARCH_BOOK_FAILURE:
      return {
         ...state,
         searchingBooks: false
      };
   default:
      return state;
   }
};

export default views;
