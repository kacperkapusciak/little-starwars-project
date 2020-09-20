import React, { Suspense } from 'react';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';
import { ThemeProvider, CssBaseline } from '@material-ui/core';

import theme from './styles/theme';

import { Spinner } from './components';

const Choose = React.lazy(() => import('./pages/choose'));
const Game = React.lazy(() => import('./pages/game'));
const Landing = React.lazy(() => import('./pages/landing'));

const App = () => (
  <ThemeProvider theme={theme}>
    <CssBaseline />
    <Suspense fallback={<Spinner />}>
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
  </ThemeProvider>
);

export default App;
