import { IPerson, IStarship, IError, GameType } from '.';

export interface IState {
  gameType: GameType | null;
  loading: boolean;
  error: IError | null;
  starships: IStarship[] | null;
  people: IPerson[] | null;
  score: {
    left: number;
    right: number;
  }
}
