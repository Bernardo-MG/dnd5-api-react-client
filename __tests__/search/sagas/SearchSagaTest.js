import '@babel/polyfill';
import { search, fetch } from 'search/sagas';
import { call } from 'redux-saga/effects';
import { cloneableGenerator } from '@redux-saga/testing-utils';

const generator = cloneableGenerator(search)({ payload: 'abc' }, 0);
const generatorEmpty = cloneableGenerator(search)({}, 0);

describe('Search requests saga', () => {
   it('tries to fetch query', () => {
      const gen = generator.clone();
      expect(
         gen.next().value
         ).toEqual(
            call(fetch, 'abc')
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
