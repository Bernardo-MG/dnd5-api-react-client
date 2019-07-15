import * as types from 'search/actions/types';

const search = (state = { bookIds: [], searchingBooks: false }, action) => {
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
   case types.SET_BOOK_IDS:
      return {
         ...state,
         bookIds: action.payload
      };
   default:
      return state;
   }
};

export default search;
