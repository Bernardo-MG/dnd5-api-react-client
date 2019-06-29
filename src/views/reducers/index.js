import * as types from 'search/actions/types';

const views = (state = { searchingBooks: false }, action) => {
   const { type } = action;
   let { payload } = action;

   if (payload === undefined) {
      payload = [];
   }

   switch (type) {
   case types.SEARCH:
      return {
         ...state,
         searchingBooks: true
      };
   case types.SEARCH_SUCCESS:
   case types.SEARCH_FAILURE:
      return {
         ...state,
         searchingBooks: false
      };
   default:
      return state;
   }
};

export default views;
