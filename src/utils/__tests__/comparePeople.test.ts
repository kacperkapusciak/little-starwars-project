import { GameState, IPerson } from '../../types';
import { comparePeople } from '../';

describe('[util] comparePeople', () => {
  let person1: IPerson, person2: IPerson;

  beforeEach(() => {
    person1 = {
      name: 'Luke Skywalker',
      height: '172',
      mass: '77',
      hair_color: 'blond',
      skin_color: 'fair',
      eye_color: 'blue',
      birth_year: '19BBY',
      gender: 'male',
    };

    person2 = {
      name: 'C-3PO',
      height: '167',
      mass: '75',
      hair_color: 'n/a',
      skin_color: 'gold',
      eye_color: 'yellow',
      birth_year: '112BBY',
      gender: 'n/a',
    };
  });

  it('should determine winner based on height', () => {
    expect(comparePeople([person1, person2])).toEqual(GameState.LEFT_WON);
    person2.height = '200';
    expect(comparePeople([person1, person2])).toEqual(GameState.RIGHT_WON);
  });

  it('should call it draw when heights are equal', () => {
    person1.height = person2.height;
    expect(comparePeople([person1, person2])).toEqual(GameState.DRAW);
  });

  it('should call it inconclusive when one or both heights are unknown', () => {
    person1.height = 'unknown';
    expect(comparePeople([person1, person2])).toEqual(GameState.INCONCLUSIVE);
    person2.height = 'unknown';
    expect(comparePeople([person1, person2])).toEqual(GameState.INCONCLUSIVE);
  });
});
