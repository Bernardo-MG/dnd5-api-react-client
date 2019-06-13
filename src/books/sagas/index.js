import { put, takeLatest } from 'redux-saga/effects';
import { SEARCH_SUCCESS } from 'search/actions/types';
import { addBooks } from 'books/actions';
import { normalize } from 'normalizr';
import { document } from 'books/schema';

export function* saveBooks(action) {
   const normalized = normalize(action.payload.docs, document);
   const books = normalized.entities.docs.undefined;
   yield put(addBooks(books));
}

export const bookSagas = [
   takeLatest(SEARCH_SUCCESS, saveBooks)
];
