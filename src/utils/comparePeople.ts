import { GameState, IPerson } from '../types';

export const comparePeople = (people: [IPerson, IPerson]): GameState => {
  const heights = people.map((person) => parseInt(person.height, 10));
  const isHeightNaN = heights.some((height) => isNaN(height));

  if (isHeightNaN) return GameState.INCONCLUSIVE;
  if (heights[0] === heights[1]) return GameState.DRAW;
  if (heights[0] > heights[1]) return GameState.LEFT_WON;
  return GameState.RIGHT_WON;
};
