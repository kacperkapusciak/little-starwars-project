import React from 'react';
import { createMemoryHistory } from 'history';
import { Router } from 'react-router-dom';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import Game from '../game';

describe('[routing] Game', () => {
  it('navigates to Choose when "go back" button is clicked', async () => {
    const history = createMemoryHistory();
    render(
      <Router history={history}>
        <Game />
      </Router>
    );

    fireEvent.click(screen.getByText('go back'));

    expect(history.location.pathname).toBe('/choose');
  });
});
