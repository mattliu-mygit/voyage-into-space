import * as types from './actionTypes';

export function setSearchterm(searchterm) {
  return { type: types.UPDATE_SEARCHTERM_SUCCESS, searchterm };
}
