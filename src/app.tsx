import React, { Suspense } from 'react';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';
import { CircularProgress } from '@material-ui/core';

const Choose = React.lazy(() => import('./pages/choose'));
const Game = React.lazy(() => import('./pages/game'));
const Landing = React.lazy(() => import('./pages/landing'));

const App = () => {
  return (
    <Suspense fallback={<CircularProgress />}>
      <Router>
        <Switch>
          <Route path="/game">
            <Game />
          </Route>
          <Route path="/choose">
            <Choose />
          </Route>
          <Route path="/">
            <Landing />
          </Route>
        </Switch>
      </Router>
    </Suspense>
  );
};

export default App;
