import { IState } from '../types';
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

    case actionTypes.INCREMENT_SCORE_LEFT:
      return { ...state, scoreLeft: state.scoreLeft + 1 };
    
    case actionTypes.INCREMENT_SCORE_RIGHT:
      return { ...state, scoreRight: state.scoreRight + 1 };

    default:
      return state;
  }
}

export default reducer;
