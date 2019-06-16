import { all } from 'redux-saga/effects';
import { bookSagas } from 'books/sagas';
import { searchSagas } from 'search/sagas';

/**
 * Application redux sagas.
 * 
 * It is just a merge of all the sagas in the application.
 */
export default function* rootSaga() {
   yield all([...searchSagas, ...bookSagas]);
}
