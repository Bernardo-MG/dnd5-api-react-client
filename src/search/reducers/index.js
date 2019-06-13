import * as types from 'search/actions/types';

const search = (state = { total: 0, pageSize: 100, currentPage: 0 }, action) => {
   const { type } = action;
   let { payload } = action;

   if (payload === undefined) {
      payload = [];
   }

   switch (type) {
   case types.CLEAR_SEARCH:
      return {
         ...state,
         total: 0,
         currentPage: 0
      };
   case types.SET_TOTAL:
      return {
         ...state,
         total: payload
      };
   case types.SET_PAGE:
      return {
         ...state,
         currentPage: Math.floor(state.total / state.pageSize)
      };
   default:
      return state;
   }
};

export default search;
