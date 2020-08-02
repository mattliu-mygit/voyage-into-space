import React from 'react';
import { connect } from 'react-redux';

const MissionLog = (props) => {
  return (
    <>
      Mission Log
      <div
        style={{
          border: 'solid',
          borderRadius: '12px',
          padding: '1rem',
          height: '100%',
          overflowX: 'hidden',
        }}
      >
        Day 1: Flight to Mars
        {props.missionLog.map((entry) => (
          <div key={entry.id}>{entry}</div>
        ))}
      </div>
    </>
  );
};

function mapStateToProps(state) {
  return {
    cost: state.cost,
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

export default connect(mapStateToProps, mapDispatchToProps)(MissionLog);
