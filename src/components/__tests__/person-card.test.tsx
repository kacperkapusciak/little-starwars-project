import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import { IPerson } from '../../types';

import { PersonCard } from '..';

describe('[component] PersonCard', () => {
  const person: IPerson = {
    name: 'Luke Skywalker',
    height: '172',
    mass: '77',
    hair_color: 'blond',
    skin_color: 'fair',
    eye_color: 'blue',
    birth_year: '19BBY',
    gender: 'male',
  };

  it('should render person details', () => {
    render(<PersonCard person={person} />);

    expect(screen.getByText(/Luke Skywalker/)).toBeInTheDocument();
    expect(screen.getByText(/172/)).toBeInTheDocument();
    expect(screen.getByText(/77/)).toBeInTheDocument();
    expect(screen.getByText(/male/)).toBeInTheDocument();
    expect(screen.getByText(/19BBY/)).toBeInTheDocument();
    expect(screen.getByText(/blond/)).toBeInTheDocument();
    expect(screen.getByText(/blue/)).toBeInTheDocument();
  });
});
