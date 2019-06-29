import { put, takeLatest, call } from 'redux-saga/effects';
import { SEARCH_BOOK } from 'search/actions/types';
import { success, failure } from 'search/actions/books';
import { searchApi } from 'api';

export function* search(action) {
   if (action.payload) {
      let response;
      try {
         response = yield call(searchApi.search, action.payload);
         yield put(success(response));
      } catch (err) {
         yield put(failure(err));
      }
   } else {
      console.error('Missing payload');
   }
}

export const searchSagas = [
   takeLatest(SEARCH_BOOK, search)
];
