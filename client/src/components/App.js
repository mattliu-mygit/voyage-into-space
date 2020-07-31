import React from 'react';
import StartPage from './StartPage';
import Header from './common/Header';
import { Route, Switch, Redirect } from 'react-router-dom';
import NotFoundPAge from './NotFoundPage';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Leaderboard from './Leaderboard';
import GamePage from './GamePage';

function App() {
  return (
    <div
      style={{
        paddingBottom: '1rem',
      }}
    >
      <ToastContainer autoClose={4000} hideProgressBar />
      <Header />
      <Switch>
        <Route path="/" exact component={StartPage} />
        <Route path="/blast-off" exact component={GamePage} />
        <Route path="/Leaderboard" exact component={Leaderboard} />
        <Redirect from="/about-page" to="/about" />
        <Route component={NotFoundPAge} />
      </Switch>
    </div>
  );
}

export default App;
