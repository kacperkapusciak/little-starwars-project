import React, { useContext, useEffect } from 'react';
import { Button } from '@material-ui/core';
import { useHistory } from 'react-router-dom';

import { Store } from '../data/store';
import { GameType } from '../types';
import { fetchPeople, fetchStarships } from '../data/actions';

const Game = () => {
  const { state, dispatch } = useContext(Store);
  let history = useHistory();

  useEffect(() => {
    if (!state.gameType) {
      goBack();
    }
  });

  useEffect(() => {
    if (state.gameType === GameType.PEOPLE && state.people === null) {
      fetchPeople(dispatch);
    } else if (state.gameType === GameType.STARSHIPS && state.starships === null) {
      fetchStarships(dispatch);
    }
  }, []);

  const goBack = () => {
    history.push('choose');
  };

  const getTwoRandom = () => {};

  console.log(state);

  return (
    <>
      <h1>Game</h1>
      <Button color="primary" onClick={getTwoRandom}>
        Play again
      </Button>
      <Button onClick={goBack}>Back</Button>
    </>
  );
};

export default Game;
