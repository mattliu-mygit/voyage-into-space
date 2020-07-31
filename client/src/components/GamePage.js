import React, { useEffect, useState } from 'react';
import launchsite from '../launchsite.jpg';
import ComputerScreen from './ComputerScreen';

const styles = {
  gameStyle: {
    borderRadius: '12px',
    border: 'solid',
    borderColor: 'rgba(192, 192, 192, 1)',
    boxShadow: 'black',
    margin: '2.5%',
    marginTop: '2%',
    marginBottom: '0rem',
    backgroundImage: `url(${launchsite})`,
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'left',
    backgroundAttackment: 'fixed',
    borderBottomColor: 'rgba(122, 122, 122, 0.8)',
    borderTopColor: 'rgba(122, 122, 122, 0.8)',
    color: '#39FF14',
    fontSize: '1.75vw',
    fontFamily: 'Lucida Console, Courier, monospace',
    height: `42.5vw`,
  },
  missionText: {
    marginLeft: '1rem',
    //borderRadius: '12px',
    //backgroundColor: 'rgba(0, 0, 0, 0.2)',
    // padding: '1rem',
    // paddingBottom: '0.25rem',
    // paddingTop: '0.25rem',
  },
};

const GamePage = () => {
  const [started, setStarted] = useState(false);
  const [word1Num, setWord1Num] = useState(1);
  const [word2Num, setWord2Num] = useState(1);
  const [site, setSite] = useState('');
  const [date, setDate] = useState('');
  const [width, setWidth] = useState(0);
  const [borderWidth, setBorderWidth] = useState(0);
  const [borderHeight, setBorderHeight] = useState(0);
  const [opened, setOpened] = useState(false);
  const [startGame, setStartGame] = useState(false);
  const word1 = 'Voyage Inc. Desert Launch Site';
  const word2 = new Date().toString();

  useEffect(() => {
    if (!opened && borderWidth < 3) {
      setTimeout(() => {
        setBorderWidth(borderWidth + 0.02);
      }, 10);
    } else if (!opened && borderHeight < 1.5) {
      setTimeout(() => {
        setBorderHeight(borderHeight + 0.02);
      }, 10);
    } else if (borderHeight >= 1) {
      setTimeout(() => {
        setOpened(true);
      }, 500);
    }

    if (!started && opened && width < 95) {
      setTimeout(() => {
        setWidth(width + 0.1);
      }, 1);
    } else if (opened && !started) {
      setStarted(true);
    }

    if (started && opened) {
      setTimeout(() => {
        if (word1Num <= word1.length) {
          setWord1Num(word1Num + 1);
          setSite(site + word1[word1Num - 1]);
        } else if (word2Num <= word2.length) {
          setWord2Num(word2Num + 1);
          setDate(date + word2[word2Num - 1]);
        } else if (startGame === false) {
          setStartGame(true);
        }
      }, 75);
    }
  }, [
    site.length,
    date.length,
    started,
    width,
    borderWidth,
    opened,
    borderHeight,
  ]);

  return (
    <>
      <div className="placeholder"> |</div>
      <div
        style={{
          ...styles.gameStyle,
          width: `${width}%`,
          borderTopWidth: `${borderHeight}rem`,
          borderBottomWidth: `${borderHeight}rem`,
          borderLeftWidth: `${borderWidth}vw`,
          borderRightWidth: `${borderWidth}vw`,
          backgroundSize: `89.05vw 53.5vw`,
        }}
      >
        {site.length !== 0 ? (
          <p
            style={{
              marginTop: '1rem',
              marginBottom: '0rem',
              ...styles.missionText,
              display: 'inline-block',
            }}
          >
            {site}
          </p>
        ) : null}
        {date.length !== 0 ? (
          <p style={{ ...styles.missionText, position: 'absolute' }}>{date}</p>
        ) : null}
        {startGame ? <ComputerScreen /> : null}
      </div>
    </>
  );
};

export default GamePage;
