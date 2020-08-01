import React from 'react';
import { connect } from 'react-redux';
import initialState from '../redux/reducers/initialState';

const Score = (props) => {
  return (
    <>
      <table className="table">
        <thead>
          <tr>
            <th>Category</th>
            <th>Value</th>
            <th>Score</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th>Total Cost</th>
            <th>${props.cost}</th>
            <th>{props.cost - initialState.cost}</th>
          </tr>
          <tr>
            <th>Total Fuel Used</th>
            <th>{props.rocketFuel} tonnes</th>
            <th>{props.rocketFuel - props.rocketFuel}</th>
          </tr>
        </tbody>
      </table>
    </>
  );
};

function mapStateToProps(state) {
  return {
    cost: state.cost,
    flightChance: state.flightChance,
    fuelAmount: state.fuelAmount,
    settlers: state.settlers,
    equipmentCost: state.equipmentCost,
    rocketFuel: state.rocketFuel,
    oxygen: state.oxygen,
    missionLog: state.missionLog,
  };
}

function mapDispatchToProps(dispatch) {
  return {};
}

export default connect(mapStateToProps, mapDispatchToProps)(Score);
