import { CHAR_CLASS_LIST_READ, CHAR_CLASS_READ } from 'domain/actions/types';

const defaultState = {
   charclasses: {},
   charclasslist: {}
};

const domain = (state = defaultState, action) => {
   switch (action.type) {
   case CHAR_CLASS_LIST_READ:
      return {
         ...state,
         ...action.payload
      };
   case CHAR_CLASS_READ:
      return {
         ...state,
         ...action.payload
      };
   default:
      return state;
   }
};

export default domain;
