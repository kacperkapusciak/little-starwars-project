import { IPerson, IStarship, IError, GameType, GameState } from '.';

export interface IState {
  gameType: GameType | null;
  loading: boolean;
  error: IError | null;
  starships: IStarship[];
  people: IPerson[];
  gameState: GameState | null;
  gameStarships: [IStarship, IStarship] | null;
  gamePeople: [IPerson, IPerson] | null;
  score: {
    left: number;
    right: number;
  };
}
