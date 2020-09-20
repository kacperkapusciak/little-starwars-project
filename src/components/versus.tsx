import React, { useContext } from 'react';
import { Typography, useTheme } from '@material-ui/core';

import { Store } from '../store';
import { GameType } from '../types';

const Versus = () => {
  const theme = useTheme();
  const { state } = useContext(Store);
  const { gameType, gamePeople, gameStarships } = state;

  const participants = gameType === GameType.PEOPLE ? gamePeople : gameStarships;
  const vs = <span style={{ color: theme.palette.secondary.main }}>vs</span>;

  const left = participants && participants[0].name;
  const right = participants && participants[1].name;

  return (
    <Typography variant="h5" color="textSecondary" align="center" style={{ marginBottom: 48 }}>
      {left} {vs} {right}
    </Typography>
  );
};

export default Versus;
