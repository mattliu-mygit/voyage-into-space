import { combineReducers } from 'redux';
import searchterm from './searchReducer';
import marylandSearchterm from './marylandSearchReducer';

const rootReducer = combineReducers({
  searchterm,
  marylandSearchterm,
});

export default rootReducer;
