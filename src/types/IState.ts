import { IPerson, IStarship, GameType } from '.';

export interface IState {
  gameType: GameType | null;
  starships: IStarship[] | null;
  people: IPerson[] | null;
  scoreLeft: number;
  scoreRight: number;
}
