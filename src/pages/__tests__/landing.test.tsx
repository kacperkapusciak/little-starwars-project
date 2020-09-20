import React from 'react';
import { createMemoryHistory } from 'history';
import { Router } from 'react-router-dom';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import Landing from '../landing';

describe('[routing] Landing', () => {
  it('navigates to Choose when button is clicked', async () => {
    const history = createMemoryHistory();
    render(
      <Router history={history}>
        <Landing />
      </Router>
    );

    expect(history.location.pathname).toBe('/');

    fireEvent.click(screen.getByRole('button'));

    expect(history.location.pathname).toBe('/choose');
  });
});
