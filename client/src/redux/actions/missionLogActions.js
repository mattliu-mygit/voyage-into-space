import * as types from './actionTypes';

export function setMissionLog(missionLog) {
  return { type: types.UPDATE_MISSION_LOG_SUCCESS, missionLog };
}
