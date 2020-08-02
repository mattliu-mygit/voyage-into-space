import React, { useEffect, useState } from 'react';
import launchsite from '../../launchsiteUpdated.jpg';
import ComputerScreen from './ComputerScreen';
import { connect } from 'react-redux';
import { Redirect } from 'react-router';
import rocket from '../../rocket.gif';

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
    backgroundPosition: 'top left',
    backgroundAttackment: 'fixed',
    borderBottomColor: 'rgba(122, 122, 122, 0.8)',
    borderTopColor: 'rgba(122, 122, 122, 0.8)',
    color: '#39FF14',
    fontSize: '1.75vw',
    fontFamily: 'Lucida Console, Courier, monospace',
  },
  missionText: {
    marginLeft: '1rem',
  },
};

const GamePage = (props) => {
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
  const [close, setClose] = useState(false);
  const [phase, setPhase] = useState(1);
  const [height, setHeight] = useState(50);
  const [rocketHeight, setRocketHeight] = useState(32.5);
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
    if (close && height > 0) {
      setTimeout(() => {
        setHeight(height - 0.05);
      }, 10);
    } else if (close && borderHeight > 0) {
      setTimeout(() => {
        setBorderHeight(borderHeight - 0.01);
      }, 10);
    } else if (close) {
      setPhase(2);
    }
    if (close && rocketHeight > -32.5 && height < 40) {
      setTimeout(() => {
        setRocketHeight(rocketHeight - 0.1);
      }, 1);
    }
  }, [
    site.length,
    date.length,
    started,
    width,
    borderWidth,
    opened,
    borderHeight,
    close,
    height,
  ]);

  const setOff = () => {
    setClose(true);
  };

  return (
    <>
      <div className="placeholder"> |</div>
      <div
        style={{
          ...styles.gameStyle,
          width: `${width}vw`,
          borderTopWidth: `${borderHeight}rem`,
          borderBottomWidth: `${borderHeight}rem`,
          borderLeftWidth: `${borderWidth}vw`,
          borderRightWidth: `${borderWidth}vw`,
          height: `${height}vw`,
          backgroundSize: 'cover',
          //backgroundSize: `89.05vw 53.5vw`,
        }}
      >
        {site.length !== 0 && !close ? (
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
        {date.length !== 0 && !close ? (
          <>
            <p style={{ ...styles.missionText, position: 'absolute' }}>
              {date}
            </p>
          </>
        ) : null}
        {startGame && !close ? (
          <>
            <ComputerScreen setOff={setOff} />
            <div
              style={{
                backgroundColor: 'rgba(0, 0, 0, 0.5)',
                position: 'relative',
                top: '5vw',
                left: '5vw',
                padding: '1rem',
                width: '50vw',
                borderRadius: '12px',
              }}
            >
              <p>Total test flights: {props.testflights}</p>
              <p>Total cost: ${props.cost}</p>
              <p>Chance of success: {props.flightChance}%</p>
              <p>Total fuel used: {props.fuelAmount} tonnes</p>
              <p>Voyager rocket fuel used: {props.rocketFuel} tonnes</p>
              <p>Settler count: {props.settlers}</p>
              <p>Oxygen: {props.oxygen} tonnes</p>
              <p>Equipment: {props.equipmentCost} tonnes</p>
            </div>
          </>
        ) : null}
        {close ? (
          <div
            style={{
              position: 'absolute',
              width: '11vw',
              backgroundImage: `url(${rocket})`,
              backgroundPosition: 'center',
              backgroundSize: '19vw, 20vw',
              height: '15.5vw',
              top: `${rocketHeight}vw`,
              left: '33vw',
            }}
          ></div>
        ) : null}
      </div>
      {phase === 2 ? <Redirect to="/en-route" /> : null}
    </>
  );
};

function mapStateToProps(state) {
  return {
    cost: state.cost,
    testflights: state.testflights,
    flightChance: state.flightChance,
    fuelAmount: state.fuelAmount,
    rocketFuel: state.rocketFuel,
    settlers: state.settlers,
    equipmentCost: state.equipmentCost,
    oxygen: state.oxygen,
  };
}

function mapDispatchToProps(dispatch) {
  return {};
}

export default connect(mapStateToProps, mapDispatchToProps)(GamePage);
