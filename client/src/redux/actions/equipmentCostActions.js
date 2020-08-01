import * as types from './actionTypes';

export function setEquipmentCost(equipmentCost) {
  return { type: types.UPDATE_EQUIPMENT_COST_SUCCESS, equipmentCost };
}
