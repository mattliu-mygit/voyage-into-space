import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function rocketFuelReducer(
  state = initialState.rocketFuel,
  action
) {
  if (action.type === types.UPDATE_ROCKET_FUEL_SUCCESS) {
    return action.rocketFuel;
  } else {
    return state;
  }
}
