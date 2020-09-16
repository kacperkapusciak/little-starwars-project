import React from 'react';
import { useHistory } from 'react-router-dom';
import { Button } from '@material-ui/core';

const Landing = () => {
  let history = useHistory();

  return (
    <Button variant="contained" color="primary" onClick={() => history.push('/choose')}>
      Play game
    </Button>
  );
};

export default Landing;
