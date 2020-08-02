import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as costActions from '../../redux/actions/costActions';
import * as fuelAmountActions from '../../redux/actions/fuelAmountActions';
import * as rocketFuelActions from '../../redux/actions/rocketFuelActions';
import * as equipmentCostActions from '../../redux/actions/equipmentCostActions';
import * as settlersActions from '../../redux/actions/settlersActions';
import * as oxygenActions from '../../redux/actions/oxygenActions';

const Liftoff = (props) => {
  const [screen, setScreen] = useState(1);

  useEffect(() => {
    if (screen === 1) {
      setTimeout(() => {
        setScreen(screen + 1);
      }, 10000);
    }
    if (screen !== 4) {
      props.actions.setEquipmentCost(
        Math.round(props.settlers * 0.5 + props.settlers / 10)
      );
    }
    if (screen === 4) {
      setTimeout(() => {
        setScreen(5);
        props.setOff();
      }, 3000);
    }
  }, [props.settlers, screen]);

  const handleFuelMinusOne = () => {
    if (props.settlers >= 10) {
      props.actions.setFuelAmount(props.fuelAmount - 10);
      props.actions.setRocketFuel(props.rocketFuel - 10);
      props.actions.setCost(props.cost - 500 * 10);
    } else {
      alert('Impossible to have negative fuel!');
    }
  };
  const handleFuelPlusOne = () => {
    props.actions.setFuelAmount(props.fuelAmount + 10);
    props.actions.setRocketFuel(props.rocketFuel + 10);
    props.actions.setCost(props.cost + 500 * 10);
  };
  const handleFuelMinusTen = () => {
    if (props.settlers >= 100) {
      props.actions.setFuelAmount(props.fuelAmount - 100);
      props.actions.setRocketFuel(props.rocketFuel - 100);
      props.actions.setCost(props.cost - 500 * 100);
    } else {
      alert('Impossible to have negative fuel!');
    }
  };
  const handleFuelPlusTen = () => {
    props.actions.setFuelAmount(props.fuelAmount + 100);
    props.actions.setRocketFuel(props.rocketFuel + 100);
    props.actions.setCost(props.cost + 500 * 100);
  };

  const handleSettlersMinusOne = () => {
    if (props.settlers > 0) {
      props.actions.setRocketFuel(Math.round(props.rocketFuel - 1.07 * 7));
      props.actions.setFuelAmount(Math.round(props.fuelAmount - 1.07 * 7));
      props.actions.setSettlers(props.settlers - 1);
      props.actions.setCost(props.cost + 1000000 + 3745);
      props.actions.setEquipmentCost(props.equipmentCost - 0.5);
      props.actions.setOxygen(props.oxygen - 0.5);
    } else {
      alert('No more than 100 settlers per ride!');
    }
  };
  const handleSettlersPlusOne = () => {
    if (props.settlers < 100) {
      props.actions.setRocketFuel(Math.round(props.rocketFuel + 1.07 * 7));
      props.actions.setFuelAmount(Math.round(props.fuelAmount + 1.07 * 7));
      props.actions.setSettlers(props.settlers + 1);
      props.actions.setCost(props.cost - 1000000 - 3745);
      props.actions.setEquipmentCost(props.equipmentCost + 0.5);
      props.actions.setOxygen(props.oxygen + 0.5);
    } else {
      alert('No more than 100 settlers per ride!');
    }
  };
  const handleSettlersMinusTen = () => {
    if (props.settlers >= 10) {
      props.actions.setRocketFuel(Math.round(props.rocketFuel - 1.07 * 70));
      props.actions.setFuelAmount(Math.round(props.fuelAmount - 1.07 * 70));
      props.actions.setSettlers(props.settlers - 10);
      props.actions.setCost(props.cost + 10000000 + 37450);
      props.actions.setEquipmentCost(props.equipmentCost - 5);
      props.actions.setOxygen(props.oxygen - 5);
    } else {
      alert('Impossible to have negative settlers!');
    }
  };
  const handleSettlersPlusTen = () => {
    if (props.settlers < 100) {
      props.actions.setRocketFuel(Math.round(props.rocketFuel + 1.07 * 70));
      props.actions.setFuelAmount(Math.round(props.fuelAmount + 1.07 * 70));
      props.actions.setSettlers(props.settlers + 10);
      props.actions.setCost(props.cost - 10000000 - 37450);
      props.actions.setEquipmentCost(props.equipmentCost + 5);
      props.actions.setOxygen(props.oxygen + 5);
    } else {
      alert('No more than 100 settlers per ride!');
    }
  };

  const handleOxygenMinusOne = () => {
    if (props.oxygen > props.settlers * 0.5) {
      props.actions.setOxygen(props.oxygen - 0.5);
      props.actions.setCost(props.cost - 1750);
      props.actions.setRocketFuel(Math.round(props.rocketFuel - 0.5 * 7));
      props.actions.setFuelAmount(Math.round(props.fuelAmount - 0.5 * 7));
    } else {
      alert('Your settlers need air to breathe!');
    }
  };
  const handleOxygenPlusOne = () => {
    props.actions.setOxygen(props.oxygen + 0.5);
    props.actions.setCost(props.cost + 1750);
    props.actions.setRocketFuel(Math.round(props.rocketFuel + 0.5 * 7));
    props.actions.setFuelAmount(Math.round(props.fuelAmount + 0.5 * 7));
  };
  const handleOxygenMinusTen = () => {
    if (props.oxygen > props.settlers * 0.5) {
      props.actions.setOxygen(props.oxygen - 5);
      props.actions.setCost(props.cost - 17500);
      props.actions.setRocketFuel(Math.round(props.rocketFuel - 0.5 * 70));
      props.actions.setFuelAmount(Math.round(props.fuelAmount - 0.5 * 70));
    } else {
      alert('Your settlers need air to breathe!');
    }
  };
  const handleOxygenPlusTen = () => {
    props.actions.setOxygen(props.oxygen + 5);
    props.actions.setCost(props.cost + 1750);
    props.actions.setRocketFuel(Math.round(props.rocketFuel + 0.5 * 70));
    props.actions.setFuelAmount(Math.round(props.fuelAmount + 0.5 * 70));
  };

  const handleContinue = () => {
    setScreen(screen + 1);
  };

  return (
    <>
      {screen === 1 ? (
        <>
          <p>Nice! It's now time to load our rocket!</p>
          <p>
            <b>
              For every tonne of cargo, the rocket requires 7 tonnes of
              propellent
            </b>
            , 0.5 tons of oxygen and 0.5 tons of food per person, 1 ton of
            colonizing supplies per 10 people, and each tonne of propellent is
            $500 so balance your costs wisely!
          </p>
        </>
      ) : screen === 2 ? (
        <>
          <p class="resources" style={{ marginTop: '0rem' }}>
            Add in resources below!
          </p>
          <p class="Fuel" style={{ marginBottom: '1rem' }}>
            Fuel
          </p>
          <div style={{ fontSize: '1vw' }}>
            <button
              style={{ borderRadius: '12px' }}
              class="bootn2 bootn5"
              onClick={handleFuelMinusTen}
            >
              -100
            </button>
            <button
              style={{ borderRadius: '12px' }}
              class="bootn2 bootn5"
              onClick={handleFuelMinusOne}
            >
              -10
            </button>
            <button
              style={{ borderRadius: '12px' }}
              class="bootn2 bootn5"
              onClick={handleFuelPlusOne}
            >
              +10
            </button>
            <button
              style={{ borderRadius: '12px' }}
              class="bootn2 bootn5"
              onClick={handleFuelPlusTen}
            >
              +100
            </button>
          </div>
          <p class="Settlers">Settlers (0.07 tonnes)</p>
          <div style={{ fontSize: '1vw' }}>
            <button
              style={{ borderRadius: '12px' }}
              class="bootn2 bootn6"
              onClick={handleSettlersMinusTen}
            >
              -10
            </button>
            <button
              style={{ borderRadius: '12px' }}
              class="bootn2 bootn6"
              onClick={handleSettlersMinusOne}
            >
              -1
            </button>
            <button
              style={{ borderRadius: '12px' }}
              class="bootn2 bootn6"
              onClick={handleSettlersPlusOne}
            >
              +1
            </button>
            <button
              style={{ borderRadius: '12px' }}
              class="bootn2 bootn6"
              onClick={handleSettlersPlusTen}
            >
              +10
            </button>
          </div>
          <button
            style={{ borderRadius: '12px' }}
            class="bootn4 bootn7"
            onClick={handleContinue}
          >
            Continue
          </button>
        </>
      ) : screen === 3 ? (
        <>
          <p class="Oxygen">Oxygen in Reserve</p>
          <div style={{ fontSize: '0.75vw' }}>
            <button
              class="bootn69 bootn79"
              style={{ borderRadius: '12px' }}
              onClick={handleOxygenMinusTen}
            >
              -5
            </button>
            <button
              class="bootn69 bootn79"
              style={{ borderRadius: '12px' }}
              onClick={handleOxygenMinusOne}
            >
              -0.5
            </button>
            <button
              class="bootn69 bootn79"
              style={{ borderRadius: '12px' }}
              onClick={handleOxygenPlusOne}
            >
              +0.5
            </button>
            <button
              class="bootn69 bootn79"
              style={{ borderRadius: '12px' }}
              onClick={handleOxygenPlusTen}
            >
              +5
            </button>
          </div>
          <p class="Equip">Scientific Equipment</p>
          <div style={{ fontSize: '0.75vw' }}>
            <button
              class="bootn23 bootn223"
              style={{ borderRadius: '12px' }}
              onClick={() => {
                if (props.equipmentCost > props.settlers * 0.5) {
                  props.actions.setEquipmentCost(props.equipmentCost - 1);
                  props.actions.setCost(props.cost - 3500);
                  props.actions.setRocketFuel(Math.round(props.rocketFuel - 7));
                  props.actions.setFuelAmount(Math.round(props.fuelAmount - 7));
                } else {
                  alert('You can not remove anymore equipment!');
                }
              }}
            >
              -1
            </button>
            <button
              class="bootn23 bootn223"
              style={{ borderRadius: '12px' }}
              onClick={() => {
                props.actions.setEquipmentCost(props.equipmentCost + 1);
                props.actions.setCost(props.cost + 3500);
                props.actions.setRocketFuel(Math.round(props.rocketFuel + 7));
                props.actions.setFuelAmount(Math.round(props.fuelAmount + 7));
              }}
            >
              +1
            </button>
          </div>
          <button
            class="bootn3456 bootn7654"
            style={{ borderRadius: '12px' }}
            onClick={() => {
              setScreen(screen + 1);
            }}
          >
            Blast Off!
          </button>
        </>
      ) : screen === 4 ? (
        <>
          <div>Epic! We're ready to blast off!</div>
        </>
      ) : null}
    </>
  );
};

function mapStateToProps(state) {
  return {
    cost: state.cost,
    fuelAmount: state.fuelAmount,
    settlers: state.settlers,
    equipmentCost: state.equipmentCost,
    rocketFuel: state.rocketFuel,
    oxygen: state.oxygen,
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
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Liftoff);
