import React, { useContext } from 'react';
import { Store } from '../store';

const Score = () => {
  const { state } = useContext(Store);
  const { score } = state;
  return (
    <div>
      {score.left} - {score.right}
    </div>
  );
};

export default Score;
