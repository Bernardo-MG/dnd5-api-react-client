import comics from 'reducers/comics';
import * as types from 'actions/types';

describe('Comics reducer', () => {
   it('returns the initial state', () => {
      expect(comics(undefined, {})).toEqual(
         {
            comics: []
         }
      )
   }),

   it('clears values', () => {
      expect(
            comics({ comics: ['a', 'b'] }, {
            type: types.CLEAR_COMICS
         })
      ).toEqual(
         {
            comics: []
         }
      )
   }),

   it('sets values', () => {
      expect(
            comics({ comics: [] }, {
            type: types.ADD_COMICS,
            payload: ['a']
         })
      ).toEqual(
         {
            comics: ['a']
         }
      )
   }),

   it('adds values', () => {
      expect(
            comics({ comics: ['a', 'b'] }, {
            type: types.ADD_COMICS,
            payload: ['c']
         })
      ).toEqual(
         {
            comics: ['a', 'b', 'c']
         }
      )
   })
});
