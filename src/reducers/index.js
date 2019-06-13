import { combineReducers } from 'redux';
import comic from 'reducers/comics';
import search from 'search/reducers';

const rootReducer = combineReducers({ comic, search });

export default rootReducer;
