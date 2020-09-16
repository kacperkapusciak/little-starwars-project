import React from 'react';
import { useHistory } from 'react-router-dom';
import { Button } from '@material-ui/core';

const Choose = () => {
  let history = useHistory();

  const navigateToGame = () => {
    history.push('/game');
  };

  return (
    <>
      <Button color="primary" onClick={navigateToGame}>
        Choose people
      </Button>
      <Button color="primary" onClick={navigateToGame}>
        Choose starships
      </Button>
    </>
  );
};

export default Choose;
