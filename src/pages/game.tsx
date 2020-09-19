import React, { useContext, useEffect } from 'react';
import { Button, CircularProgress } from '@material-ui/core';
import { useHistory } from 'react-router-dom';

import ErrorNotification from '../components/error-notification';
import { Store } from '../store';
import { GameType } from '../types';
import { fetchPeople, fetchStarships, playGamePeople, playGameStarships } from '../store/actions';

import Score from '../components/score';

const Game = () => {
  const { state, dispatch } = useContext(Store);
  const { gameType, people, starships } = state;
  let history = useHistory();

  useEffect(() => {
    if (!gameType) goBack();
  });

  useEffect(() => {
    if (gameType === GameType.PEOPLE && !people.length) fetchPeople(dispatch);
    else if (gameType === GameType.STARSHIPS && !starships.length) fetchStarships(dispatch);
  }, []);

  useEffect(() => {
    if (
      (gameType === GameType.PEOPLE && people.length) ||
      (gameType === GameType.STARSHIPS && starships.length)
    ) {
      playGame();
    }
  }, [people.length, starships.length]);

  const goBack = () => {
    history.push('choose');
  };

  const playGame = () => {
    if (gameType === GameType.PEOPLE) {
      playGamePeople(dispatch, people);
    } else {
      playGameStarships(dispatch, starships);
    }
  };

  console.log(state);

  if (state.loading) return <CircularProgress />;

  return (
    <>
      <h1>Game</h1>
      <Score />
      <Button color="primary" onClick={playGame}>
        Play again
      </Button>
      <Button onClick={goBack}>Back</Button>
      <ErrorNotification />
    </>
  );
};

export default Game;
