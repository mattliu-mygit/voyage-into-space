import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function missionLogReducer(
  state = initialState.missionLog,
  action
) {
  if (action.type === types.UPDATE_MISSION_LOG_SUCCESS) {
    return action.missionLog;
  } else {
    return state;
  }
}
