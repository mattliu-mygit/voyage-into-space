import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as missionLogActions from '../redux/actions/missionLogActions';
import MissionLog from './Phase 2/MissionLog';

const DeathScreen = (props) => {
  const [playAgain, setPlayAgain] = useState(false);
  const handlePlayAgain = () => {
    props.actions.setMissionLog([]);
    setPlayAgain(true);
  };
  return (
    <>
      <div
        style={{
          color: 'white',
          textAlign: 'center',
          margin: '15vw',
          marginBottom: '0rem',
          borderRadius: '12px',
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
          padding: '2rem',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <h1>
          <i>
            <p>
              Awwww... It seems that you have met misfortune while traveling to
              Mars. :(
            </p>
            Take a look at your logs below to figure out why and try again!
          </i>
        </h1>
        <div
          style={{
            width: '50%',
            position: 'relative',
            left: '19%',
            textAlign: 'left',
            margin: '5vw',
          }}
        >
          <MissionLog />
        </div>
        <button className="btn btn-primary" onClick={handlePlayAgain}>
          Play Again
        </button>
        {playAgain ? <Redirect to="/" /> : null}
      </div>
      ;
    </>
  );
};

function mapStateToProps(state) {
  return {};
}

function mapDispatchToProps(dispatch) {
  return {
    actions: {
      setMissionLog: bindActionCreators(
        missionLogActions.setMissionLog,
        dispatch
      ),
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(DeathScreen);
