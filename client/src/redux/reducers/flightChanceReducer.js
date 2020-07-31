import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function flightChanceReducer(
  state = initialState.flightChance,
  action
) {
  if (action.type === types.UPDATE_FLIGHT_CHANCE_SUCCESS) {
    return action.flightChance;
  } else {
    return state;
  }
}
