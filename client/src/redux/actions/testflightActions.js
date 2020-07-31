import * as types from './actionTypes';

export function setTestflights(testflights) {
  return { type: types.UPDATE_TESTFLIGHT_SUCCESS, testflights };
}
