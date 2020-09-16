import { IPerson, IStarship } from '.';

export interface IState {
  count: {
    starships: number;
    people: number;
  };
  starships: [IStarship, IStarship] | null;
  people: [IPerson, IPerson] | null;
  scoreLeft: number;
  scoreRight: number;
}
