import * as types from './actionTypes';

export function setRocketFuel(rocketFuel) {
  return { type: types.UPDATE_ROCKET_FUEL_SUCCESS, rocketFuel };
}
