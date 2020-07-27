import domain from 'domain/reducers';
import * as types from 'domain/actions/types';

describe('Domain reducer', () => {
   it('returns the initial state', () => {
      expect(domain(undefined, {})).toEqual(
         {
            charclasses: {},
            charclasslist: {}
         }
      )
   }),

   it('sets values', () => {
      expect(
            domain({ charclasslist: {} }, {
            type: types.CHAR_CLASS_LIST_READ,
            payload: { charclasslist: { 'a': {}} }
         })
      ).toEqual(
         {
            charclasslist: {'a': {}}
         }
      )
   }),

   it('replaces values', () => {
      expect(
            domain({ charclasslist: {'a': {}, 'b': {}} }, {
            type: types.CHAR_CLASS_LIST_READ,
            payload: { charclasslist: { 'c': {}} }
         })
      ).toEqual(
         {
            charclasslist: {'c': {}}
         }
      )
   })
});
