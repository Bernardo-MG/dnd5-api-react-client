import * as types from 'search/actions/types';

const search = (state = { ids: [] }, action) => {
   const { type } = action;
   let { payload } = action;

   if (payload === undefined) {
      payload = [];
   }

   switch (type) {
   case types.CLEAR_SEARCH_BOOK:
      return {
         ...state,
         total: 0,
         currentPage: 0
      };
   default:
      return state;
   }
};

export default search;
