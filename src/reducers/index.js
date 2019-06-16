import { combineReducers } from 'redux';
import book from 'books/reducers';
import search from 'search/reducers';

const rootReducer = combineReducers({ book, search });

export default rootReducer;
