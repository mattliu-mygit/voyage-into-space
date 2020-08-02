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
    if (testflights > 0) {
      props.actions.setTestflights(props.testflights - 1);
      props.actions.setCost(props.cost - 50000000);
      props.actions.setFuelAmount(props.fuelAmount - 200);
    } else {
      alert('Impossible to have negative flights!');
    }
  };
  const handlePlusOne = () => {
    props.actions.setTestflights(props.testflights + 1);
    props.actions.setCost(props.cost + 50000000);
    props.actions.setFuelAmount(props.fuelAmount + 200);
  };
  const handleMinusTen = () => {
    if (testflights > 10) {
      props.actions.setTestflights(props.testflights - 10);
      props.actions.setCost(props.cost - 500000000);
      props.actions.setFuelAmount(props.fuelAmount - 2000);
    } else {
      alert('Impossible to have negative flights!');
    }
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
      <div class="conlainer button-group " style={{ fontSize: '0.75vw' }}>
        <button
          class="bootn bootn3"
          style={{ borderRadius: '12px' }}
          onClick={handleMinusTen}
        >
          -10
        </button>
        <button
          class="bootn bootn3"
          style={{ borderRadius: '12px' }}
          onClick={handleMinusOne}
        >
          -1
        </button>
        <button
          class="bootn bootn3"
          style={{ borderRadius: '12px' }}
          onClick={handlePlusOne}
        >
          +1
        </button>
        <button
          class="bootn bootn3"
          style={{ borderRadius: '12px' }}
          onClick={handlePlusTen}
        >
          +10
        </button>
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
