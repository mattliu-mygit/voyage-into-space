import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function testflightReducer(
  state = initialState.testflights,
  action
) {
  if (action.type === types.UPDATE_TESTFLIGHT_SUCCESS) {
    return action.testflights;
  } else {
    return state;
  }
}
