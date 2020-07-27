import { combineReducers } from 'redux';
import domain from 'domain/reducers';
import notification from 'notify/reducers';

const rootReducer = combineReducers({ domain, notification });

export default rootReducer;
