import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import initialState from '../redux/reducers/initialState';

const Score = (props) => {
  useEffect(() => {
    props.setScore(
      props.cost -
        initialState.cost +
        (props.rocketFuel - initialState.rocketFuel) * 10 +
        props.settlers * 1000 +
        props.settlers * 500
    );
  }, []);
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
            <th>{(props.rocketFuel - initialState.rocketFuel) * 10}</th>
          </tr>
          <tr>
            <th>Settlers</th>
            <th>{props.settlers}</th>
            <th>{props.settlers * 1000}</th>
          </tr>
          <tr>
            <th>Scientific Equipment</th>
            <th>{props.settlers}</th>
            <th>{props.settlers * 500}</th>
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
