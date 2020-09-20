import React, { useContext } from 'react';
import { Grid } from '@material-ui/core';

import { Store } from '../store';
import PersonCard from './person-card';
import StarshipCard from './starship-card';
import Score from './score';
import { GameType } from '../types';

const GameResult = () => {
  const { state } = useContext(Store);
  const { gameType, gamePeople, gameStarships } = state;

  let cards: JSX.Element[] | null = null;
  if (gameType === GameType.PEOPLE && gamePeople) {
    cards = gamePeople.map((person) => <PersonCard person={person} />);
  } else if (gameType === GameType.STARSHIPS && gameStarships) {
    cards = gameStarships.map((starship) => <StarshipCard starship={starship} />);
  }

  if (!cards) return null;

  return (
    <Grid container spacing={3} alignItems="center">
      <Grid item sm>
        {cards[0]}
      </Grid>
      <Grid item sm={3}>
        <Score />
      </Grid>
      <Grid item sm>
        {cards[1]}
      </Grid>
    </Grid>
  );
};

export default GameResult;
