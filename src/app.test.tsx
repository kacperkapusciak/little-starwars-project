import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { render, waitFor, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import App from './app';

describe('[routing] App', () => {
  it('loads and navigate to landing page by default', async () => {
    render(<App />, { wrapper: MemoryRouter });

    await waitFor(() => screen.getByRole('button'));

    expect(screen.getByText('Play game')).toBeInTheDocument();
  });
});
