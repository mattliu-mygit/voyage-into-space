import React from 'react';

const Leaderboard = (props) => {
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
          <tbody></tbody>
        </table>
      </div>
      ;
    </>
  );
};

export default Leaderboard;
