import React, { useContext } from 'react';
import { Typography } from '@material-ui/core';

import { Store } from '../store';

export const Score = () => {
  const { state } = useContext(Store);
  const { score, gameState } = state;
  return (
    <>
      <Typography variant="h2" align="center">
        {score.left} - {score.right}
      </Typography>
      <Typography variant="h5" align="center" color="textSecondary">
        {gameState?.replace(/_/g, ' ')}
      </Typography>
    </>
  );
};
