import { IStarship, IPerson } from '.';
import { GameType } from './GameType';
import { IError } from './IError';

export const FETCH_START = 'FETCH_START';
export const FETCH_SUCCESS = 'FETCH_SUCCESS';
export const FETCH_FAIL = 'FETCH_FAIL';
export const FETCH_STARSHIPS = 'FETCH_STARSHIPS';
export const FETCH_PEOPLE = 'FETCH_PEOPLE';
export const CLEAR_ERROR = 'CLEAR_ERROR';
export const SET_GAME_TYPE = 'SET_GAME_TYPE';

interface FetchStartAction {
  type: typeof FETCH_START;
}

interface FetchSuccessAction {
  type: typeof FETCH_SUCCESS;
}

interface FetchFailAction {
  type: typeof FETCH_FAIL;
  payload: IError;
}

interface FetchStarshipsAction {
  type: typeof FETCH_STARSHIPS;
  payload: IStarship[];
}

interface FetchPeopleAction {
  type: typeof FETCH_PEOPLE;
  payload: IPerson[];
}

interface ClearErrorAction {
  type: typeof CLEAR_ERROR;
}

interface SetGameTypeAction {
  type: typeof SET_GAME_TYPE;
  payload: GameType;
}

export type ActionTypes =
  | FetchStartAction
  | FetchSuccessAction
  | FetchFailAction
  | FetchPeopleAction
  | FetchStarshipsAction
  | ClearErrorAction
  | SetGameTypeAction;
