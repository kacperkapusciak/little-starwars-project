import React from 'react';
import { CircularProgress, Grid } from '@material-ui/core';

export const Spinner = () => (
  <Grid container spacing={0} alignItems="center" justify="center" style={{ height: '100vh' }}>
    <Grid item>
      <CircularProgress />
    </Grid>
  </Grid>
);
