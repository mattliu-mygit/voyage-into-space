import React from 'react';
import StartPage from './StartPage';
import Header from './common/Header';
import { Route, Switch, Redirect } from 'react-router-dom';
import NotFoundPAge from './NotFoundPage';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Leaderboard from './Leaderboard';
import Phase1 from './Phase 1/Phase1';
import Phase2 from './Phase 2/Phase2';

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
        <Route path="/blast-off" exact component={Phase1} />
        <Route path="/Leaderboard" exact component={Leaderboard} />
        <Route path="/en-route" exact component={Phase2} />
        <Redirect from="/about-page" to="/about" />
        <Route component={NotFoundPAge} />
      </Switch>
    </div>
  );
}

export default App;
