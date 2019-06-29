import { put, takeLatest } from 'redux-saga/effects';
import { SEARCH_BOOK_SUCCESS } from 'search/actions/types';
import { addBooks } from 'books/actions';
import { normalize } from 'normalizr';
import { book } from 'books/schema';

export function* saveBooks(action) {
   const normalized = normalize(action.payload.docs, [book]);
   yield put(addBooks(normalized.entities.books));
}

export const bookSagas = [
   takeLatest(SEARCH_BOOK_SUCCESS, saveBooks)
];
