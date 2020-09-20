import React from 'react';
import { Typography } from '@material-ui/core';

import { GameState } from '../types';

interface ScoreProps {
  score: {
    left: number;
    right: number;
  };
  gameState: GameState | null;
}

export const Score = ({ score, gameState }: ScoreProps) => (
  <>
    <Typography variant="h2" align="center">
      {score.left} - {score.right}
    </Typography>
    <Typography variant="h5" align="center" color="textSecondary">
      {gameState?.replace(/_/g, ' ')}
    </Typography>
  </>
);
