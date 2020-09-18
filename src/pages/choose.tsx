import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { Button } from '@material-ui/core';

import { Store } from '../store';
import { setGameType } from '../store/actions';
import { GameType } from '../types';

const Choose = () => {
  let history = useHistory();
  const { dispatch } = useContext(Store);

  const choose = (gameType: GameType) => {
    setGameType(dispatch, gameType);
    history.push('/game');
  };

  return (
    <>
      <Button color="primary" onClick={() => choose(GameType.PEOPLE)}>
        Choose people
      </Button>
      <Button color="primary" onClick={() => choose(GameType.STARSHIPS)}>
        Choose starships
      </Button>
    </>
  );
};

export default Choose;
