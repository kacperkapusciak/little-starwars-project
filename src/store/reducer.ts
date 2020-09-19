import { IState, Score } from '../types';
import { actionTypes, ActionTypes } from './actionTypes';

function reducer(state: IState, action: ActionTypes): IState {
  switch (action.type) {
    case actionTypes.FETCH_START:
      return { ...state, loading: true, error: null };

    case actionTypes.FETCH_SUCCESS:
      return { ...state, loading: false, error: null };

    case actionTypes.FETCH_FAIL:
      return { ...state, loading: false, error: action.payload };

    case actionTypes.FETCH_PEOPLE:
      return { ...state, people: action.payload };

    case actionTypes.FETCH_STARSHIPS:
      return { ...state, starships: action.payload };

    case actionTypes.CLEAR_ERROR:
      return { ...state, error: null };

    case actionTypes.SET_GAME_TYPE:
      return { ...state, gameType: action.payload };

    case actionTypes.START_GAME:
      return { ...state, gameState: null, gamePeople: null, gameStarships: null };

    case actionTypes.PLAY_GAME_STARSHIPS:
      return { ...state, gameStarships: action.payload };

    case actionTypes.PLAY_GAME_PEOPLE:
      return { ...state, gamePeople: action.payload };

    case actionTypes.UPDATE_GAME_STATE:
      return { ...state, gameState: action.payload };

    case actionTypes.INCREMENT_SCORE:
      const newScore = { ...state.score };
      action.payload === Score.LEFT ? newScore.left++ : newScore.right++;
      return { ...state, score: newScore };

    default:
      return state;
  }
}

export default reducer;
