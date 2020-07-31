import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function searchReducer(state = initialState.searchterm, action) {
  if (action.type === types.UPDATE_SEARCHTERM_SUCCESS) {
    return action.searchterm;
  } else {
    return state;
  }
}
