import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as missionLogActions from '../redux/actions/missionLogActions';
import MissionLog from './Phase 2/MissionLog';
import Score from './Score';
import { setData } from '../api/scoresApi';

const Congrats = (props) => {
  const [playAgain, setPlayAgain] = useState(false);
  const [score, setScore] = useState(0);
  const [name, setName] = useState('');
  const [redirect, setRedirect] = useState(false);

  const handlePlayAgain = () => {
    props.actions.setMissionLog([]);
    setPlayAgain(true);
  };

  const handleSubmit = () => {
    let entry = { name: name, score: score };
    setData(entry);
    setRedirect(true);
  };

  const handleChange = (event) => {
    setName(event.target.value);
  };

  return (
    <>
      <div
        style={{
          color: 'white',
          textAlign: 'center',
          marginLeft: '15vw',
          marginRight: '15vw',
          marginBottom: '0rem',
          borderRadius: '12px',
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
          padding: '2rem',
          alignItems: 'center',
          justifyContent: 'center',
          marginTop: '4rem',
        }}
      >
        <h1>
          <i>
            <p>Congrats!!!</p>
          </i>
        </h1>
        <h2>You made it to Mars!</h2>
        <h2>Check out your score below!</h2>
        <Score setScore={setScore} />
        <div
          style={{
            width: '50%',
            position: 'relative',
            left: '19%',
            textAlign: 'left',
            marginLeft: '5vw',
            marginBottom: '1vw',
          }}
        >
          <MissionLog />
        </div>
        <form onSubmit={handleSubmit}>
          <input
            className="form-control searchbar"
            type="text"
            value={name}
            placeholder="Enter your name here!"
            onChange={handleChange}
            style={{
              width: '50%',
              position: 'relative',
              left: '19%',
              textAlign: 'left',
              marginLeft: '5vw',
              marginBottom: '1vw',
            }}
          />
          <input
            className="bootn bootn4"
            style={{
              fontSize: '1vw',
              width: '10%',
              height: '2vw',
              margin: '0.25rem',
            }}
            type="submit"
            value="Submit"
          />
        </form>
        <button
          style={{
            fontSize: '1vw',
            width: '10%',
            height: '2vw',
            margin: '1rem',
          }}
          className="bootn bootn4"
          onClick={handlePlayAgain}
        >
          Play Again
        </button>
        {playAgain ? <Redirect to="/" /> : null}
      </div>
      ;{redirect ? <Redirect to="/leaderboard" /> : null}
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

export default connect(mapStateToProps, mapDispatchToProps)(Congrats);
