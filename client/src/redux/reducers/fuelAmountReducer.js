import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function fuelAmountReducer(
  state = initialState.fuelAmount,
  action
) {
  if (action.type === types.UPDATE_FUEL_AMOUNT_SUCCESS) {
    return action.fuelAmount;
  } else {
    return state;
  }
}
