import books from 'books/reducers';
import * as types from 'books/actions/types';

describe('Books reducer', () => {
   it('returns the initial state', () => {
      expect(books(undefined, {})).toEqual(
         {
            books: {}
         }
      )
   }),

   it('clears values', () => {
      expect(
            books({ books: {'a': {}, 'b': {}} }, {
            type: types.CLEAR_BOOKS
         })
      ).toEqual(
         {
            books: {}
         }
      )
   }),

   it('sets values', () => {
      expect(
            books({ books: {} }, {
            type: types.ADD_BOOKS,
            payload: {'a': {}}
         })
      ).toEqual(
         {
            books: {'a': {}}
         }
      )
   }),

   it('adds values', () => {
      expect(
            books({ books: {'a': {}, 'b': {}} }, {
            type: types.ADD_BOOKS,
            payload: {'c': {}}
         })
      ).toEqual(
         {
            books: {'a': {}, 'b': {}, 'c': {}}
         }
      )
   })
});
