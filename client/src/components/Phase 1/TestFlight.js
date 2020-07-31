import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as costActions from '../../redux/actions/costActions';
import * as flightChanceActions from '../../redux/actions/flightChanceActions';
import * as testflightActions from '../../redux/actions/testflightActions';
import * as fuelAmountActions from '../../redux/actions/fuelAmountActions';

const TestFlight = (props) => {
  const testflights = props.testflights;
  useEffect(() => {
    props.actions.setFlightChance(
      Math.round((100 * (props.testflights / 2 + 50)) / 110)
    );
  }, [testflights]);

  const handleMinusOne = () => {
    props.actions.setTestflights(props.testflights - 1);
    props.actions.setCost(props.cost - 50);
    props.actions.setFuelAmount(props.fuelAmount - 75000);
  };
  const handlePlusOne = () => {
    props.actions.setTestflights(props.testflights + 1);
    props.actions.setCost(props.cost + 50);
    props.actions.setFuelAmount(props.fuelAmount + 75000);
  };
  const handleMinusTen = () => {
    props.actions.setTestflights(props.testflights - 10);
    props.actions.setCost(props.cost - 500);
    props.actions.setFuelAmount(props.fuelAmount - 750000);
  };
  const handlePlusTen = () => {
    props.actions.setTestflights(props.testflights + 10);
    props.actions.setCost(props.cost + 500);
    props.actions.setFuelAmount(props.fuelAmount + 750000);
  };
  return (
    <>
      <p>Select how many test flights we should perform!</p>
      <p>Each flight costs 50M dollars and uses 75000 Gallons of propellent.</p>
      <div style={{ fontSize: '0.75vw' }}>
        <button onClick={handleMinusTen}>-10</button>
        <button onClick={handleMinusOne}>-1</button>
        <button onClick={handlePlusOne}>+1</button>
        <button onClick={handlePlusTen}>+10</button>
      </div>
    </>
  );
};

function mapStateToProps(state) {
  return {
    cost: state.cost,
    testflights: state.testflights,
    flightChance: state.flightChance,
    fuelAmount: state.fuelAmount,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: {
      setCost: bindActionCreators(costActions.setCost, dispatch),
      setTestflights: bindActionCreators(
        testflightActions.setTestflights,
        dispatch
      ),
      setFlightChance: bindActionCreators(
        flightChanceActions.setFlightChance,
        dispatch
      ),
      setFuelAmount: bindActionCreators(
        fuelAmountActions.setFuelAmount,
        dispatch
      ),
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(TestFlight);
