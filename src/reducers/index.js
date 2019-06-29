import { combineReducers } from 'redux';
import book from 'books/reducers';
import search from 'search/reducers';
import views from 'views/reducers';

const rootReducer = combineReducers({ book, search, views });

export default rootReducer;
