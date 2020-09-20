import React from 'react';
import { createMemoryHistory } from 'history';
import { Router } from 'react-router-dom';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import Choose from '../choose';

describe('[routing] Choose', () => {
  it('navigates to Game when People card is clicked', async () => {
    const history = createMemoryHistory();
    render(
      <Router history={history}>
        <Choose />
      </Router>
    );

    fireEvent.click(screen.getByText('Play with characters'));

    expect(history.location.pathname).toBe('/game');
  });

  it('navigates to Game when Character card is clicked', async () => {
    const history = createMemoryHistory();
    render(
      <Router history={history}>
        <Choose />
      </Router>
    );

    fireEvent.click(screen.getByText('Play with starships'));

    expect(history.location.pathname).toBe('/game');
  });
});
