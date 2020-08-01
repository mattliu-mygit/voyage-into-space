import * as types from './actionTypes';

export function setSettlers(settlers) {
  return { type: types.UPDATE_SETTLERS_SUCCESS, settlers };
}
