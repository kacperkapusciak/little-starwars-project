import React from 'react';
import { Typography, useTheme } from '@material-ui/core';

import { IPerson, IStarship } from '../types';

interface VersusProps {
  participants: [IPerson, IPerson] | [IStarship, IStarship] | null;
}

export const Versus = ({ participants }: VersusProps) => {
  const theme = useTheme();
  const vs = <span style={{ color: theme.palette.secondary.main }}>vs</span>;

  if (!participants) return null;

  return (
    <Typography variant="h5" color="textSecondary" align="center" style={{ marginBottom: 48 }}>
      {participants[0].name} {vs} {participants[1].name}
    </Typography>
  );
};
