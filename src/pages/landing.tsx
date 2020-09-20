import React from 'react';
import { useHistory } from 'react-router-dom';
import { Box, Button, Container, Grid, Typography } from '@material-ui/core';

import logo from '../assets/logo.png';

const Landing = () => {
  const history = useHistory();

  return (
    <Container maxWidth="sm">
      <Grid container spacing={4} alignItems="center" style={{ height: '100vh' }}>
        <Grid item sm={12}>
          <Box>
            <Typography variant="h1">Little</Typography>
            <Box display="flex" justifyContent="center">
              <img src={logo} alt="" height="236px" />
            </Box>
            <Typography variant="h1" align="right">
              Project
            </Typography>
            <Box display="flex" justifyContent="center" style={{ marginTop: 64 }}>
              <Button
                size="large"
                variant="contained"
                color="primary"
                onClick={() => history.push('/choose')}
              >
                Play game
              </Button>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Landing;
