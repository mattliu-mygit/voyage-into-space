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
      Math.round((100 * (props.testflights / 2 + 55)) / 110)
    );
  }, [testflights]);

  const handleMinusOne = () => {
    props.actions.setTestflights(props.testflights - 1);
    props.actions.setCost(props.cost - 50000000);
    props.actions.setFuelAmount(props.fuelAmount - 200);
  };
  const handlePlusOne = () => {
    props.actions.setTestflights(props.testflights + 1);
    props.actions.setCost(props.cost + 50000000);
    props.actions.setFuelAmount(props.fuelAmount + 200);
  };
  const handleMinusTen = () => {
    props.actions.setTestflights(props.testflights - 10);
    props.actions.setCost(props.cost - 500000000);
    props.actions.setFuelAmount(props.fuelAmount - 2000);
  };
  const handlePlusTen = () => {
    props.actions.setTestflights(props.testflights + 10);
    props.actions.setCost(props.cost + 500000000);
    props.actions.setFuelAmount(props.fuelAmount + 2000);
  };
  return (
    <>
      <p>
        Each flight costs around 50M dollars and uses around 200 tonnes of
        propellent.
      </p>
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
