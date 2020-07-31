import * as types from './actionTypes';

export function setFuelAmount(fuelAmount) {
  return { type: types.UPDATE_FUEL_AMOUNT_SUCCESS, fuelAmount };
}
