import React, { useContext, useEffect } from 'react';
import { Box, Button, Container, Grid, Typography } from '@material-ui/core';
import { useHistory } from 'react-router-dom';

import ErrorNotification from '../components/error-notification';
import { Store } from '../store';
import { GameType } from '../types';
import { playGamePeople, playGameStarships } from '../store/actions';

import GameResult from '../components/game-result';
import Versus from '../components/versus';
import Spinner from '../components/spinner';

const Game = () => {
  const { state, dispatch } = useContext(Store);
  const { gameType, people, starships } = state;
  const history = useHistory();

  useEffect(() => {
    if (!gameType) goBack();
  });

  useEffect(() => {
    playGame();
  }, [people.length, starships.length]);

  const goBack = () => {
    history.push('choose');
  };

  const playGame = () => {
    if (gameType === GameType.PEOPLE && people.length) {
      playGamePeople(dispatch, people);
    } else if (gameType === GameType.STARSHIPS && starships.length) {
      playGameStarships(dispatch, starships);
    }
  };

  if (state.loading) {
    return <Spinner />;
  }

  return (
    <Container maxWidth="md">
      <Grid container spacing={0} direction="column" alignItems="center" style={{ marginTop: 128 }}>
        <Grid item>
          <Box>
            <Typography variant="h3" gutterBottom align="center">
              {gameType === GameType.PEOPLE ? 'Characters' : 'Starships'}
            </Typography>
            <Versus />
            <GameResult />
            <Box display="flex" justifyContent="center" style={{ margin: '32px 0' }}>
              <Button variant="contained" color="primary" size="large" onClick={playGame}>
                play again
              </Button>
            </Box>
            <Button variant="outlined" onClick={goBack}>
              go back
            </Button>
          </Box>
        </Grid>
      </Grid>

      <ErrorNotification />
    </Container>
  );
};

export default Game;
