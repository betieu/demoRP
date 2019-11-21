import { combineReducers } from 'redux';
import * as reducers from './data'


const rootReducer = combineReducers(reducers);
export default rootReducer;