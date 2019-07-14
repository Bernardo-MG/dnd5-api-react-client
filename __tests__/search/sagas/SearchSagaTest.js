import '@babel/polyfill';
import { search } from 'search/sagas';
import { call, put } from 'redux-saga/effects';
import { cloneableGenerator } from '@redux-saga/testing-utils';
import api from 'api';
import { success } from 'search/actions/books';

const generator = cloneableGenerator(search)({ payload: 'abc' }, 0);
const generatorEmpty = cloneableGenerator(search)({}, 0);

describe('Search requests saga', () => {
   it('tries to search', () => {
      const gen = generator.clone();
      expect(
         gen.next().value
         ).toEqual(
            call(api.Books.byTitle, 'abc')
      )
   }),

   it('sends success action', () => {
      const gen = generator.clone();
      gen.next();
      expect(
         gen.next().value
         ).toEqual(
            put(success())
      )
   }),

   it('returns nothing if payload is missing', () => {
      const gen = generatorEmpty.clone();
      expect(
         gen.next().value
         ).toEqual(
         undefined
      )
   })
});
