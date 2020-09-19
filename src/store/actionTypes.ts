import { IStarship, IPerson, Score } from '../types';
import { GameType } from '../types/GameType';
import { IError } from '../types/IError';

export enum actionTypes {
  FETCH_START = 'FETCH_START',
  FETCH_SUCCESS = 'FETCH_SUCCESS',
  FETCH_FAIL = 'FETCH_FAIL',
  FETCH_STARSHIPS = 'FETCH_STARSHIPS',
  FETCH_PEOPLE = 'FETCH_PEOPLE',
  CLEAR_ERROR = 'CLEAR_ERROR',
  SET_GAME_TYPE = 'SET_GAME_TYPE',
  INCREMENT_SCORE = 'INCREMENT_SCORE',
}

interface FetchStartAction {
  type: typeof actionTypes.FETCH_START;
}

interface FetchSuccessAction {
  type: typeof actionTypes.FETCH_SUCCESS;
}

interface FetchFailAction {
  type: typeof actionTypes.FETCH_FAIL;
  payload: IError;
}

interface FetchStarshipsAction {
  type: typeof actionTypes.FETCH_STARSHIPS;
  payload: IStarship[];
}

interface FetchPeopleAction {
  type: typeof actionTypes.FETCH_PEOPLE;
  payload: IPerson[];
}

interface ClearErrorAction {
  type: typeof actionTypes.CLEAR_ERROR;
}

interface SetGameTypeAction {
  type: typeof actionTypes.SET_GAME_TYPE;
  payload: GameType;
}

interface IncrementScoreAction {
  type: typeof actionTypes.INCREMENT_SCORE;
  payload: Score;
}

export type ActionTypes =
  | FetchStartAction
  | FetchSuccessAction
  | FetchFailAction
  | FetchPeopleAction
  | FetchStarshipsAction
  | ClearErrorAction
  | SetGameTypeAction
  | IncrementScoreAction;
