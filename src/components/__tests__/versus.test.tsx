import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import { IPerson, IStarship } from '../../types';

import { Versus } from '..';

describe('[component] Versus', () => {
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

  it('should render person1 name vs person2 name', () => {
    const person2 = { ...person };
    person2.name = 'Darth Vader';
    render(<Versus participants={[person, person2]} />);
    expect(screen.getByText(/Luke Skywalker/i)).toBeInTheDocument();
    expect(screen.getByText('vs')).toBeInTheDocument();
    expect(screen.getByText(/Darth Vader/i)).toBeInTheDocument();
  });

  it('should render starship1 name vs starship2 name', () => {
    const starship2 = { ...starship };
    starship2.name = 'Death Star';
    render(<Versus participants={[starship, starship2]} />);
    expect(screen.getByText(/B-Wing/i)).toBeInTheDocument();
    expect(screen.getByText('vs')).toBeInTheDocument();
    expect(screen.getByText(/Death Star/i)).toBeInTheDocument();
  });
});
