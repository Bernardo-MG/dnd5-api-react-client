import { put, takeLatest, call } from 'redux-saga/effects';
import * as types from 'search/actions/actionTypes';
import { success, failure } from 'search/actions';

function fetch(params) {
   return params;
}

export function* search(action) {
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
   takeLatest(types.SEARCH_COMIC, search)
];
