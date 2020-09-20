import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import { GameState } from '../../types';

import { Score } from '..';

describe('[component] Score', () => {
  const score = {
    left: 0,
    right: 1,
  };

  it('should render score', () => {
    render(<Score score={score} gameState={null} />);
    expect(screen.getByText('0 - 1')).toBeInTheDocument();
  });

  it('should render game state', () => {
    const { rerender } = render(<Score score={score} gameState={GameState.DRAW} />);
    expect(screen.getByText('DRAW')).toBeInTheDocument();

    rerender(<Score score={score} gameState={GameState.INCONCLUSIVE} />);
    expect(screen.getByText('INCONCLUSIVE')).toBeInTheDocument();

    rerender(<Score score={score} gameState={GameState.LEFT_WON} />);
    expect(screen.getByText('LEFT WON')).toBeInTheDocument();

    rerender(<Score score={score} gameState={GameState.RIGHT_WON} />);
    expect(screen.getByText('RIGHT WON')).toBeInTheDocument();
  });
});
