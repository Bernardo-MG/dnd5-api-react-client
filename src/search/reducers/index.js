import * as types from 'search/actions/types';

const search = (state = { bookIds: [] }, action) => {
   switch (action.type) {
   case types.CLEAR_SEARCH_BOOK:
      return {
         ...state,
         bookIds: []
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
