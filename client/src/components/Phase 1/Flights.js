import React, { useEffect, useState } from 'react';
import TestFlight from './TestFlight';

const Flights = (props) => {
  const [text1Num, setText1Num] = useState(1);
  const [text2Num, setText2Num] = useState(1);
  const [text1Content, setText1Content] = useState('');
  const [text2Content, setText2Content] = useState('');
  const [screen, setScreen] = useState(1);
  const text1 =
    'In order to get to Mars, we need plenty of preparation! The first unmanned mission to mars cost 450 million dollars and 200 tonnes of propellent, so those are our starting costs! ';
  const text2 =
    'First off, we need some test flights to make sure our rocket works!';
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
      setTimeout(() => {
        setScreen(screen + 1);
      }, 10000);
    }
  }, [text1Content, text2Content, screen]);
  return (
    <>
      {screen === 1 ? (
        <>
          <p>{text1Content}</p>
          <p style={{ marginTop: '3rem' }}>{text2Content}</p>
        </>
      ) : screen === 2 ? (
        <>
          <p style={{ top: '5%' }}>
            More test flights will raise your chance of a successful launch!
          </p>
          <p>
            More resources means a larger range of error in case anything awry
            occurs!
          </p>
        </>
      ) : screen === 3 ? (
        <>
          <p style={{ top: '5%' }}>
            Now how many test flights should we perform?
          </p>
          <TestFlight />
          <button className="btn btn-primary" onClick={props.done}>
            Done
          </button>
        </>
      ) : null}
    </>
  );
};
export default Flights;
