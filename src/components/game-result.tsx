import React, { useContext } from 'react';
import { Grid } from '@material-ui/core';

import { PersonCard, StarshipCard, Score } from '.';
import { Store } from '../store';
import { GameType } from '../types';

export const GameResult = () => {
  const { state } = useContext(Store);
  const { gameState, gameType, gamePeople, gameStarships, score } = state;

  let cards: JSX.Element[] | null = null;
  if (gameType === GameType.PEOPLE && gamePeople) {
    cards = gamePeople.map((person) => <PersonCard person={person} />);
  } else if (gameType === GameType.STARSHIPS && gameStarships) {
    cards = gameStarships.map((starship) => <StarshipCard starship={starship} />);
  }

  if (!cards) return null;

  return (
    <Grid container spacing={3} alignItems="center" justify="center">
      <Grid item sm>
        {cards[0]}
      </Grid>
      <Grid item sm={3}>
        <Score score={score} gameState={gameState} />
      </Grid>
      <Grid item sm>
        {cards[1]}
      </Grid>
    </Grid>
  );
};
