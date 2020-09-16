import React, { useEffect, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { Button } from '@material-ui/core';

import { Store } from '../data/store';
import { fetchPeopleAndStarshipsCount } from '../data/actions';

const Choose = () => {
  let history = useHistory();
  const { state, dispatch } = useContext(Store);

  useEffect(() => {
    if (state.count.starships === 0 && state.count.people === 0) {
      fetchPeopleAndStarshipsCount(dispatch);
    }
  });

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
