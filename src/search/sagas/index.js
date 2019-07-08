import { put, takeLatest, call } from 'redux-saga/effects';
import { SEARCH_BOOK, SEARCH_BOOK_SUCCESS } from 'search/actions/types';
import { success, failure, setIds as setBookIds } from 'search/actions/books';
import api from 'api';
import { addBooks } from 'books/actions';
import { normalize } from 'normalizr';
import { book } from 'books/schema';

export function* search(action) {
   if (action.payload) {
      let response;
      try {
         response = yield call(api.Books.byTitle, action.payload);
         yield put(success(response));
      } catch (err) {
         yield put(failure(err));
      }
   } else {
      console.error('Missing payload');
   }
}

export function* saveBooks(action) {
   const normalized = normalize(action.payload.docs, [book]);
   yield put(addBooks(normalized.entities.books));
   yield put(setBookIds(normalized.result));
}

export const searchSagas = [
   takeLatest(SEARCH_BOOK, search),
   takeLatest(SEARCH_BOOK_SUCCESS, saveBooks)
];
