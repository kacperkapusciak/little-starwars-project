import { GameState, IStarship } from '../../types';
import { compareStarships } from '..';

describe('[util] compareStarships', () => {
  let starship1: IStarship, starship2: IStarship;

  beforeEach(() => {
    starship1 = {
      name: 'Slave 1',
      model: 'Firespray-31-class patrol and attack',
      manufacturer: 'Kuat Systems Engineering',
      cost_in_credits: 'unknown',
      length: '21.5',
      max_atmosphering_speed: '1000',
      crew: '1',
      passengers: '6',
      cargo_capacity: '70000',
      consumables: '1 month',
      hyperdrive_rating: '3.0',
      MGLT: '70',
      starship_class: 'Patrol craft',
    };

    starship2 = {
      name: 'Imperial shuttle',
      model: 'Lambda-class T-4a shuttle',
      manufacturer: 'Sienar Fleet Systems',
      cost_in_credits: '240000',
      length: '20',
      max_atmosphering_speed: '850',
      crew: '6',
      passengers: '20',
      cargo_capacity: '80000',
      consumables: '2 months',
      hyperdrive_rating: '1.0',
      MGLT: '50',
      starship_class: 'Armed government transport',
    };
  });

  it('should determine winner based on crew', () => {
    expect(compareStarships([starship1, starship2])).toEqual(GameState.RIGHT_WON);
    starship1.crew = '200';
    expect(compareStarships([starship1, starship2])).toEqual(GameState.LEFT_WON);
  });

  it('should call it draw when heights are equal', () => {
    starship1.crew = starship2.crew;
    expect(compareStarships([starship1, starship2])).toEqual(GameState.DRAW);
  });

  it('should call it inconclusive when one or both heights are unknown', () => {
    starship1.crew = 'unknown';
    expect(compareStarships([starship1, starship2])).toEqual(GameState.INCONCLUSIVE);
    starship2.crew = 'unknown';
    expect(compareStarships([starship1, starship2])).toEqual(GameState.INCONCLUSIVE);
  });
});
