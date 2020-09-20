import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import { IStarship } from '../../types';

import { StarshipCard } from '..';

describe('[component] StarshipCard', () => {
  const starship: IStarship = {
    name: 'B-wing',
    model: 'ASF-01 starfighter',
    manufacturer: 'Slayn & Korpil',
    cost_in_credits: '240000',
    length: '16.9',
    max_atmosphering_speed: '950',
    crew: '3',
    passengers: '0',
    cargo_capacity: '45',
    consumables: '1 week',
    hyperdrive_rating: '2.0',
    MGLT: '91',
    starship_class: 'Assault Starfighter',
  };

  it('should render starship details', () => {
    render(<StarshipCard starship={starship} />);

    expect(screen.getByText(/B-wing/)).toBeInTheDocument();
    expect(screen.getByText(/ASF-01 starfighter/)).toBeInTheDocument();
    expect(screen.getByText(/Slayn & Korpil/)).toBeInTheDocument();
    expect(screen.getByText(/240000/)).toBeInTheDocument();
    expect(screen.getByText(/3/)).toBeInTheDocument();
    expect(screen.getByText('2.0')).toBeInTheDocument();
  });
});
