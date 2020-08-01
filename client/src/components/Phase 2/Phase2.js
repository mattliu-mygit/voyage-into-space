import React, { useEffect, useState } from 'react';
import nightStars from '../../nightstars.jpg';
import helmetBottom from '../../helmet-bottom.png';
import Progress from './Progress';
import MissionLog from './MissionLog';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import * as costActions from '../../redux/actions/costActions';
import * as fuelAmountActions from '../../redux/actions/fuelAmountActions';
import * as rocketFuelActions from '../../redux/actions/rocketFuelActions';
import * as equipmentCostActions from '../../redux/actions/equipmentCostActions';
import * as settlersActions from '../../redux/actions/settlersActions';
import * as oxygenActions from '../../redux/actions/oxygenActions';
import * as flightChanceActions from '../../redux/actions/flightChanceActions';
import * as testFlightActions from '../../redux/actions/testflightActions';
import * as missionLogActions from '../../redux/actions/missionLogActions';
import initialState from '../../redux/reducers/initialState';

const Phase2 = (props) => {
  const [width, setWidth] = useState(0);
  const [helmetHeight, setHelmetHeight] = useState(-20);
  const [visor, setVisor] = useState(0);
  const [visorHeight, setVisorHeight] = useState(0);
  const [showAuth, setShowAuth] = useState(0);
  const [timer, setTimer] = useState(1);
  const [death, setDeath] = useState(false);
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    if (width < 100) {
      setTimeout(() => {
        setWidth(width + 1);
      }, 10);
    }
    if (helmetHeight < 77.5 && width >= 100) {
      setTimeout(() => {
        setHelmetHeight(helmetHeight + 0.25);
      }, 10);
    } else if (width >= 100) {
      setVisor(0.5);
    }

    if (width >= 100 && helmetHeight >= 70 && visorHeight < 97) {
      setTimeout(() => {
        setVisorHeight(visorHeight + 0.3);
      }, 1);
    }

    if (visorHeight >= 97 && showAuth < 1) {
      setShowAuth(showAuth + 1);
    }

    if (showAuth === 2 || showAuth === 1) {
      setTimeout(() => {
        setShowAuth(showAuth + 1);
      }, 5000);
    }
    if (timer === 1 && showAuth === 3) {
      const rollDie = Math.random();
      console.log(rollDie, props.flightChance / 100);
      if (rollDie > props.flightChance / 100) {
        reset();
        props.actions.setMissionLog([
          ...props.missionLog,
          'Day 1: Rocket exploded while landing. More test flights will find dangerous issues and raise chances of a successful flight!',
        ]);
        setDeath(true);
      }
      setTimeout(() => {
        setTimer(timer + 1);
      }, 15000);
    }
    if (timer > 1 && timer < 200 && showAuth === 3) {
      setTimeout(() => {
        setTimer(timer + 1);
      }, 1000);
    }
    if (timer === 200) {
      setTimeout(() => {}, 1000);
    }
  }, [width, helmetHeight, visorHeight, timer, showAuth]);

  const reset = () => {
    props.actions.setEquipmentCost(initialState.equipmentCost);
    props.actions.setCost(initialState.cost);
    props.actions.setFlightChance(initialState.flightChance);
    props.actions.setFuelAmount(initialState.fuelAmount);
    props.actions.setOxygen(initialState.oxygen);
    props.actions.setRocketFuel(initialState.rocketFuel);
    props.actions.setSettlers(initialState.settlers);
    props.actions.setTestflights(initialState.testflights);
  };

  return (
    <>
      {/* <div className="placeholder"> |</div> */}
      <div
        style={{
          top: '25px',
          left: '0%',
          backgroundImage: `url(${nightStars})`,
          backgroundRepeat: 'no-repeat',
          position: 'absolute',
          height: '97%',
          width: `${width}%`,
          color: 'red',
        }}
      ></div>

      <div
        style={{
          backgroundColor: `rgba(0, 0, 0, ${visor})`,
          position: 'absolute',
          top: '25px',
          left: '0%',
          height: `${visorHeight}%`,
          width: '100%',
          color: 'rgba(255, 255, 255, 0.6)',
          fontSize: '1.25vw',
          padding: '5vw',
          fontFamily: 'Lucida Console, Courier, monospace',
        }}
      >
        {showAuth > 0 ? (
          <>
            {showAuth === 1 ? (
              <>
                <p>Helmet Attached:success</p>
                <p>Visor Down:success</p>
              </>
            ) : showAuth === 2 ? (
              <>
                <p>Congratulations! Your've blasted off!</p>
                <p>Currently we are en-route to Low Earth Orbit (LEO)</p>
                <p>Once we've cleared LEO, we will notify you further.</p>
                <p>Have a safe flight.</p>
              </>
            ) : showAuth === 3 ? (
              <>
                <Progress timer={timer} />
                {timer === 1 ? (
                  <p style={{ marginTop: '1rem' }}>
                    Hello! Day 1 is today! We're blasting off right now!
                  </p>
                ) : null}
                <div
                  style={{
                    display: 'inline-block',
                    top: '20vw',
                    position: 'absolute',
                    width: '50%',
                    height: '25%',
                  }}
                >
                  <MissionLog timer={timer} />
                </div>
              </>
            ) : null}
          </>
        ) : null}
      </div>
      <div
        style={{
          top: `${helmetHeight}%`,
          left: '0%',
          backgroundImage: `url(${helmetBottom})`,
          backgroundRepeat: 'no-repeat',
          backgroundSize: '100% 100%',
          backgroundAttachment: 'center',
          position: 'absolute',
          height: '25%',
          width: `100%`,
          marginBottom: '0rem',
          color: 'white',
          padding: '4rem',
          fontSize: '2vw',
          textAlign: 'center',
          opacity: '1',
        }}
      >
        (っ◔◡◔)っ ♥ Voyage Inc. ♥
      </div>
      {death ? <Redirect to="/oof" /> : null}

      {success ? <Redirect to="/congrats" /> : null}
    </>
  );
};

function mapStateToProps(state) {
  return {
    cost: state.cost,
    flightChance: state.flightChance,
    fuelAmount: state.fuelAmount,
    settlers: state.settlers,
    equipmentCost: state.equipmentCost,
    rocketFuel: state.rocketFuel,
    oxygen: state.oxygen,
    missionLog: state.missionLog,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: {
      setCost: bindActionCreators(costActions.setCost, dispatch),
      setFuelAmount: bindActionCreators(
        fuelAmountActions.setFuelAmount,
        dispatch
      ),
      setRocketFuel: bindActionCreators(
        rocketFuelActions.setRocketFuel,
        dispatch
      ),
      setEquipmentCost: bindActionCreators(
        equipmentCostActions.setEquipmentCost,
        dispatch
      ),
      setSettlers: bindActionCreators(settlersActions.setSettlers, dispatch),
      setOxygen: bindActionCreators(oxygenActions.setOxygen, dispatch),
      setFlightChance: bindActionCreators(
        flightChanceActions.setFlightChance,
        dispatch
      ),
      setTestflights: bindActionCreators(
        testFlightActions.setTestflights,
        dispatch
      ),
      setMissionLog: bindActionCreators(
        missionLogActions.setMissionLog,
        dispatch
      ),
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Phase2);
