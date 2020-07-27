import { ADD_CLASS } from 'domain/charclasses/actions/types';

export const addClass = (payload) => {
   return {
      type: ADD_CLASS,
      payload
   };
};
