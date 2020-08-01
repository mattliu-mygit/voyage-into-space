import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function equipmentCostReducer(
  state = initialState.equipmentCost,
  action
) {
  if (action.type === types.UPDATE_EQUIPMENT_COST_SUCCESS) {
    return action.equipmentCost;
  } else {
    return state;
  }
}
