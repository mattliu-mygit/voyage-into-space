import { combineReducers } from 'redux';
import testflights from './testflightReducer';
import cost from './costReducer';
import flightChance from './flightChanceReducer';
import fuelAmount from './fuelAmountReducer';
import settlers from './settlersReducer';
import rocketFuel from './rocketFuelReducer';
import equipmentCost from './equipmentCostReducer';
import oxygen from './oxygenReducer';

const rootReducer = combineReducers({
  cost,
  testflights,
  flightChance,
  fuelAmount,
  settlers,
  rocketFuel,
  equipmentCost,
  oxygen,
});

export default rootReducer;
