import { combineReducers } from 'redux';
import testflights from './testflightReducer';
import cost from './costReducer';
import flightChance from './flightChanceReducer';
import fuelAmount from './fuelAmountReducer';

const rootReducer = combineReducers({
  cost,
  testflights,
  flightChance,
  fuelAmount,
});

export default rootReducer;
