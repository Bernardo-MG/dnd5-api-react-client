import * as types from 'actions/types';

const affinities = (state = { comics: [] }, action) => {
   const { type } = action;
   let { payload } = action;

   if (payload === undefined) {
      payload = [];
   }

   switch (type) {
   case types.CLEAR_COMICS:
      return {
         ...state,
         comics: []
      };
   case types.ADD_COMICS:
      return {
         ...state,
         comics: [...state.comics, ...payload]
      };
   default:
      return state;
   }
};

export default affinities;
