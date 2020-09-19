import { GameState, IStarship } from '../types';
import { parseCrew } from '.';

export const compareStarships = (starships: [IStarship, IStarship]): GameState => {
  const crews = starships.map((starship) => parseCrew(starship.crew));
  const isCrewNaN = crews.some((crew) => isNaN(crew));

  if (isCrewNaN) return GameState.INCONCLUSIVE;
  if (crews[0] === crews[1]) return GameState.DRAW;
  if (crews[0] > crews[1]) return GameState.LEFT_WON;
  return GameState.RIGHT_WON;
};
