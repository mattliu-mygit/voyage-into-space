import * as types from './actionTypes';

export function setMarylandSearchterm(marylandSearchterm) {
  return { type: types.UPDATE_MARYLAND_SEARCHTERM_SUCCESS, marylandSearchterm };
}
