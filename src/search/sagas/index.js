import { put, takeLatest, call } from 'redux-saga/effects';
import { SEARCH, SEARCH_SUCCESS } from 'search/actions/types';
import { success, failure, setTotal, setPage } from 'search/actions';
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

export function* searchSuccess(action) {
   yield put(setTotal(action.payload.numFound));
   yield put(setPage());
}

export const searchSagas = [
   takeLatest(SEARCH, search),
   takeLatest(SEARCH_SUCCESS, searchSuccess)
];
