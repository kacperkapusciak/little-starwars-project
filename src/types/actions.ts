import { IStarship, IPerson } from '.';
import { GameType } from './GameType';

export const FETCH_STARSHIPS = 'FETCH_STARSHIPS';
export const FETCH_PEOPLE = 'FETCH_PEOPLE';
export const SET_GAME_TYPE = 'SET_GAME_TYPE';

interface FetchStarshipsAction {
  type: typeof FETCH_STARSHIPS;
  payload: IStarship[];
}

interface FetchPeopleAction {
  type: typeof FETCH_PEOPLE;
  payload: IPerson[];
}

interface SetGameTypeAction {
  type: typeof SET_GAME_TYPE;
  payload: GameType;
}

export type ActionTypes = FetchStarshipsAction | FetchPeopleAction | SetGameTypeAction;
