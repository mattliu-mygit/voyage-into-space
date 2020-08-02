import React, { useEffect, useState } from 'react';
import { Redirect } from 'react-router-dom';

function StartPage() {
  const [fontSize, setFontSize] = useState(0.005);
  const [blastOff, setBlastOff] = useState(false);
  const [disappear, setDisappear] = useState(false);
  const [redirect, setRedirect] = useState(false);
  //UseEffect reset on load
  useEffect(() => {
    if (fontSize < 10 && !disappear) {
      setTimeout(() => {
        setFontSize(fontSize + 0.005);
      }, 1);
    } else if (!disappear) {
      setBlastOff(true);
    }
    if (fontSize > 0 && disappear) {
      setTimeout(() => {
        setFontSize(fontSize - 0.005);
      }, 1);
    }
    if (fontSize <= 0) {
      setRedirect(true);
    }
  }, [fontSize, redirect, blastOff, disappear]);

  const handleClick = () => {
    setBlastOff(false);
    setDisappear(true);
  };

  return (
    <>
      <div className="placeholder"> |</div>
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'white',
          marginTop: '12.5%',
          fontSize: `${fontSize}vw`,
        }}
      >
        <b>
          <i>Voyage into Space</i>
        </b>
      </div>
      {blastOff ? (
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: '98%',
            marginBottom: '0rem',
          }}
        >
          <button
            to="/blast-off"
            style={{
              fontSize: '2.5vw',
              marginTop: '8rem',
              color: '#F1F4FFFF',
              marginBottom: '0rem',
            }}
            className="btn launch-btn"
            onClick={handleClick}
          >
            <i>Blast Off!</i>
          </button>
        </div>
      ) : null}
      {redirect ? <Redirect to="/blast-off" /> : null}
    </>
  );
}
export default StartPage;
