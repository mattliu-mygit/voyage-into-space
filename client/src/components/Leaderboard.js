import React, { useState, useEffect } from 'react';
import { getData } from '../api/scoresApi';

const Leaderboard = (props) => {
  const [scores, setScores] = useState([]);
  useEffect(() => {
    getData().then((data) => {
      setScores(data);
    });
  }, []);
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
            <p>Leaderboards</p>
          </i>
        </h1>
        <table className="table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Score</th>
            </tr>
          </thead>
          <tbody>
            {scores.map((entry) => (
              <tr>
                <th>{entry.name}</th>
                <th>{entry.score}</th>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      ;
    </>
  );
};

export default Leaderboard;
