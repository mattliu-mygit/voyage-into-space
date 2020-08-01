import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function oxygenReducer(state = initialState.oxygen, action) {
  if (action.type === types.UPDATE_OXYGEN_SUCCESS) {
    return action.oxygen;
  } else {
    return state;
  }
}
