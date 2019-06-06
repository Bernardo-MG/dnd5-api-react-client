import { put, takeLatest, call } from 'redux-saga/effects';
import { SEARCH_COMIC } from 'search/actions/types';
import { success, failure } from 'search/actions';
import { comicApi } from 'api';

export function fetch(params) {
   return comicApi.search(params);
}

export function* search(action) {
   console.log(`Received ${action}`);
   if (action.payload) {
      let response;
      try {
         response = yield call(fetch, action.payload);
         yield put(success(response.payload));
      } catch (err) {
         yield put(failure(err));
      }
   } else {
      console.error('Missing payload');
   }
}

export const searchSagas = [
   takeLatest(SEARCH_COMIC, search)
];
