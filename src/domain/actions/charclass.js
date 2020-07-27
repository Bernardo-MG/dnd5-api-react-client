import * as types from 'domain/actions/types';

export const readCharClassList = () => {
   return {
      type: types.READ_CHAR_CLASS_LIST
   };
};

export const readCharClass = (id) => {
   return {
      type: types.READ_CHAR_CLASS,
      id
   };
};
