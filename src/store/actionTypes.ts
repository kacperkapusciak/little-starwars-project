import { IError, IStarship, IPerson, Score, GameType, GameState } from '../types';

export enum actionTypes {
  FETCH_START = 'FETCH_START',
  FETCH_SUCCESS = 'FETCH_SUCCESS',
  FETCH_FAIL = 'FETCH_FAIL',
  FETCH_STARSHIPS = 'FETCH_STARSHIPS',
  FETCH_PEOPLE = 'FETCH_PEOPLE',
  CLEAR_ERROR = 'CLEAR_ERROR',
  SET_GAME_TYPE = 'SET_GAME_TYPE',
  START_GAME = 'START_GAME',
  PLAY_GAME_STARSHIPS = 'START_GAME_STARSHIPS',
  PLAY_GAME_PEOPLE = 'PLAY_GAME_PEOPLE',
  UPDATE_GAME_STATE = 'UPDATE_GAME_STATE',
  INCREMENT_SCORE = 'INCREMENT_SCORE',
  RESET_SCORE = 'RESET_SCORE',
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

interface StartGameAction {
  type: typeof actionTypes.START_GAME;
}

interface PlayGameStarshipsAction {
  type: typeof actionTypes.PLAY_GAME_STARSHIPS;
  payload: [IStarship, IStarship];
}

interface PlayGamePeopleAction {
  type: typeof actionTypes.PLAY_GAME_PEOPLE;
  payload: [IPerson, IPerson];
}

interface UpdateGameStateAction {
  type: typeof actionTypes.UPDATE_GAME_STATE;
  payload: GameState;
}

interface IncrementScoreAction {
  type: typeof actionTypes.INCREMENT_SCORE;
  payload: Score;
}

interface ResetScoreAction {
  type: typeof actionTypes.RESET_SCORE;
}

export type ActionTypes =
  | FetchStartAction
  | FetchSuccessAction
  | FetchFailAction
  | FetchPeopleAction
  | FetchStarshipsAction
  | ClearErrorAction
  | StartGameAction
  | SetGameTypeAction
  | PlayGameStarshipsAction
  | PlayGamePeopleAction
  | UpdateGameStateAction
  | IncrementScoreAction
  | ResetScoreAction;
