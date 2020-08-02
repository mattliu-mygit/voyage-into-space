import React, { useState } from 'react';

const Poppup = (props) => {
  const [hover, setHover] = useState(false);
  return (
    <>
      <b
        onMouseEnter={() => {
          setHover(true);
        }}
        onMouseLeave={() => {
          setHover(false);
        }}
        style={{
          borderRadius: '15px',
          backgroundColor: 'rgba(255, 255, 255, 0.5)',
          padding: '1rem',
          borderTopRightRadius: '0px',
          borderTopLeftRadius: '0px',
        }}
      >
        {props.title}
      </b>
      {hover ? (
        <div
          style={{
            borderRadius: '15px',
            borderBottomRightRadius: '0px',
            backgroundColor: 'rgba(255, 255, 255, 0.5)',
            padding: '1rem',
            position: 'absolute',
            height: '25vw',
            width: '35vw',
            top: '-25.75vw',
            right: '0vw',
          }}
        >
          <img
            style={{ maxHeight: '100%', maxWidth: '100%', opacity: '1' }}
            src={props.content}
            alt="nocontent"
          />
        </div>
      ) : null}
    </>
  );
};

export default Poppup;
