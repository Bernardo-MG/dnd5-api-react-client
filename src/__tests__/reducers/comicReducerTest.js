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
            type: types.SET_COMICS,
            payload: ['a']
         })
      ).toEqual(
         {
            comics: ['a']
         }
      )
   })
});
