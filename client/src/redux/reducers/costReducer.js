import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function costReducer(state = initialState.cost, action) {
  if (action.type === types.UPDATE_COST_SUCCESS) {
    return action.cost;
  } else {
    return state;
  }
}
