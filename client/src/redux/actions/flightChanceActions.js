import * as types from './actionTypes';

export function setFlightChance(flightChance) {
  return { type: types.UPDATE_FLIGHT_CHANCE_SUCCESS, flightChance };
}
