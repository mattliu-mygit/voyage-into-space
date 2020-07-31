import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function searchReducer(
  state = initialState.marylandSearchterm,
  action
) {
  if (action.type === types.UPDATE_MARYLAND_SEARCHTERM_SUCCESS) {
    return action.marylandSearchterm;
  } else {
    return state;
  }
}
