import * as types from './actionTypes';

export function setOxygen(oxygen) {
  return { type: types.UPDATE_OXYGEN_SUCCESS, oxygen };
}
