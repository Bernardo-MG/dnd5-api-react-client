import * as types from 'search/actions/types';

const search = (state = { bookIds: [] }, action) => {
   const { type } = action;
   let { payload } = action;

   if (payload === undefined) {
      payload = [];
   }

   switch (type) {
   case types.CLEAR_SEARCH_BOOK:
      return {
         ...state,
         bookIds: []
      };
   case types.SET_BOOK_IDS:
      return {
         ...state,
         bookIds: payload
      };
   default:
      return state;
   }
};

export default search;
