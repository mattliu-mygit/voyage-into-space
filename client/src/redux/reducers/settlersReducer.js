import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function settlersReducer(state = initialState.settlers, action) {
  if (action.type === types.UPDATE_SETTLERS_SUCCESS) {
    return action.settlers;
  } else {
    return state;
  }
}
