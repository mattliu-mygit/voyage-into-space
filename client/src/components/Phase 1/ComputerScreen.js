import React, { useEffect, useState } from 'react';
import iphoneSim from '../../iphoneSim.png';
import Flights from './Flights';
import Liftoff from './Liftoff';

const styles = {
  screen: {
    backgroundImage: `url(${iphoneSim})`,
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    backgroundAttackment: 'fixed',
    backgroundSize: '30vw 50vw',
    color: 'black',
    fontSize: '1.25vw',
    float: 'right',
    width: '32vw',
    top: '15vw',
    left: '60vw',
    paddingTop: '5vw',
    paddingLeft: '8vw',
    height: '42vw',
    fontFamily: 'Arial, Helvetica, sans-serif',
    marginTop: '2.5vw',
  },
  innerScreen: {
    backgroundColor: 'white',
    height: '34vw',
    width: '16vw',
  },
  innerScreenContent: {
    position: 'relative',
    top: '15%',
    left: '5%',
  },
};

const ComputerScreen = (props) => {
  const [text1Num, setText1Num] = useState(1);
  const [text2Num, setText2Num] = useState(1);
  const [text1Content, setText1Content] = useState('');
  const [text2Content, setText2Content] = useState('');
  const [screen, setScreen] = useState(1);
  const text1 =
    'Hello! I am your launch ai, X Æ A-13! I will be assisting you on your mission into space!';
  const text2 = 'Lets get started with launch preparations!';
  useEffect(() => {
    if (screen === 1) {
      setTimeout(() => {
        if (text1Num <= text1.length) {
          setText1Num(text1Num + 1);
          setText1Content(text1Content + text1[text1Num - 1]);
        } else if (text2Num <= text2.length) {
          setText2Num(text2Num + 1);
          setText2Content(text2Content + text2[text2Num - 1]);
        } else {
          setTimeout(() => {
            setScreen(screen + 1);
          }, 3000);
        }
      }, 50);
    } else if (screen === 2) {
    }
  }, [text1Content, text2Content, screen]);

  const done = () => {
    setScreen(screen + 1);
  };

  return (
    <>
      <div style={styles.screen}>
        <div style={styles.innerScreen}>
          <div style={styles.innerScreenContent}>
            {screen === 1 ? (
              <>
                <p>{text1Content}</p>
                <p style={{ marginTop: '3rem' }}>{text2Content}</p>
              </>
            ) : screen === 2 ? (
              <Flights done={done} />
            ) : screen === 3 ? (
              <Liftoff setOff={props.setOff} />
            ) : null}
          </div>
        </div>
      </div>
    </>
  );
};

export default ComputerScreen;
