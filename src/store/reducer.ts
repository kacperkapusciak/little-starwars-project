import {
  IState,
  ActionTypes,
  FETCH_START,
  FETCH_SUCCESS,
  FETCH_FAIL,
  FETCH_PEOPLE,
  FETCH_STARSHIPS,
  CLEAR_ERROR,
  SET_GAME_TYPE,
} from '../types';

function reducer(state: IState, action: ActionTypes): IState {
  switch (action.type) {
    case FETCH_START:
      return { ...state, loading: true, error: null };

    case FETCH_SUCCESS:
      return { ...state, loading: false, error: null };

    case FETCH_FAIL:
      return { ...state, loading: false, error: action.payload };

    case FETCH_PEOPLE:
      return { ...state, people: action.payload };

    case FETCH_STARSHIPS:
      return { ...state, starships: action.payload };

    case CLEAR_ERROR:
      return { ...state, error: null };

    case SET_GAME_TYPE:
      return { ...state, gameType: action.payload };

    default:
      return state;
  }
}

export default reducer;