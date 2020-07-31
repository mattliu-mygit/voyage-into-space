import * as types from './actionTypes';

export function setCost(cost) {
  return { type: types.UPDATE_COST_SUCCESS, cost };
}
