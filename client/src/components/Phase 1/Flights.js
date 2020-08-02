import React, { useEffect, useState } from 'react';
import TestFlight from './TestFlight';

const Flights = (props) => {
  const [text1Num, setText1Num] = useState(1);
  const [text2Num, setText2Num] = useState(1);
  const [text3Num, setText3Num] = useState(1);
  const [text4Num, setText4Num] = useState(1);
  const [text5Num, setText5Num] = useState(1);
  const [text1Content, setText1Content] = useState('');
  const [text2Content, setText2Content] = useState('');
  const [text3Content, setText3Content] = useState('');
  const [text4Content, setText4Content] = useState('');
  const [text5Content, setText5Content] = useState('');
  const [screen, setScreen] = useState(1);
  const text1 =
    'In order to get to Mars, we need plenty of preparation! The first unmanned mission to mars cost 450 million dollars and 200 tonnes of propellent, and those are our starting costs as well! ';
  const text2 =
    'First off, we need some test flights to make sure our rocket works!';
  const text3 =
    'More test flights will raise your chance of a successful launch! ';
  const text4 =
    'More resources means a larger range of error in case anything awry occurs!';
  const text5 = 'Now how many test flights should we perform?';
  useEffect(() => {
    setTimeout(() => {
      if (text1Num <= text1.length && screen === 1) {
        console.log(1);
        setText1Num(text1Num + 1);
        setText1Content(text1Content + text1[text1Num - 1]);
      } else if (text2Num <= text2.length && screen === 1) {
        console.log(2);
        setText2Num(text2Num + 1);
        setText2Content(text2Content + text2[text2Num - 1]);
      } else if (text3Num <= text3.length && screen === 2) {
        console.log(3);
        setText3Num(text3Num + 1);
        setText3Content(text3Content + text3[text3Num - 1]);
      } else if (text4Num <= text4.length && screen === 2) {
        console.log(4);
        setText4Num(text4Num + 1);
        setText4Content(text4Content + text4[text4Num - 1]);
      } else if (text5Num <= text5.length && screen === 3) {
        console.log(5);
        setText5Num(text5Num + 1);
        setText5Content(text5Content + text5[text5Num - 1]);
      }
    }, 50);
    if (text2Num >= text2.length - 1 && screen === 1) {
      setTimeout(() => {
        console.log('screen', screen);
        console.log(text3Num, text3.length);
        setScreen(2);
      }, 2000);
    }

    if (text4Num >= text4.length - 1 && screen === 2) {
      setTimeout(() => {
        console.log('screen', screen);
        setScreen(3);
      }, 2000);
    }
  }, [
    text1Content,
    text2Content,
    text3Content,
    text4Content,
    text5Content,
    screen,
  ]);
  return (
    <>
      {screen === 1 ? (
        <>
          <p>{text1Content}</p>
          <p style={{ marginTop: '3rem' }}>{text2Content}</p>
        </>
      ) : screen === 2 ? (
        <>
          <p style={{ top: '5%' }}>{text3Content}</p>
          <p>{text4Content}</p>
        </>
      ) : screen === 3 ? (
        <>
          <p style={{ top: '5%' }}>{text5Content}</p>
          <TestFlight />
          <button
            class="conlainer button-group "
            class="bootn1 bootn4"
            style={{ borderRadius: '12px' }}
            onClick={props.done}
          >
            Done
          </button>
        </>
      ) : null}
    </>
  );
};
export default Flights;
