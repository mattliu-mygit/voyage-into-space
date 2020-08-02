import React, { useEffect, useState } from 'react';
import earth from '../../earth.png';
import mars from '../../mars.png';
import ship from '../../rocket.gif';

const Progress = (props) => {
  const [rocketHeight, setRocketHeight] = useState(82);
  useEffect(() => {
    if (props.timer <= 200) {
      setTimeout(() => {
        setRocketHeight(rocketHeight - 0.4225);
      }, 750);
    }
  }, [props.timer]);

  return (
    <>
      <div
        style={{
          position: 'absolute',
          left: '90%',
          top: '5%',
          marginRight: '1rem',
          padding: '1rem',
          height: '80%',
          width: '5vw',
          border: 'solid',
          borderColor: 'silver',
          borderRadius: '12px',
        }}
      >
        <img
          src={mars}
          alt="marsnotfound"
          style={{ width: '100%', opacity: '0.5' }}
        />

        <img
          src={ship}
          alt="rocketnotfound"
          style={{
            width: '90%',
            opacity: '1',
            position: 'relative',
            top: `${rocketHeight}%`,
          }}
        />

        <img
          src={earth}
          alt="earthnotfound"
          style={{
            width: '100%',
            opacity: '0.5',
            position: 'relative',
            top: '80%',
          }}
        />
      </div>
      <div>Day: {props.timer}</div>
      <div>Distance traveled: {Math.round(1.14 * props.timer)} million km</div>
    </>
  );
};

export default Progress;
