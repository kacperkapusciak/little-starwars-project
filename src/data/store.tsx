import React, { createContext, useReducer, ReactNode } from 'react';

import {
  IState,
  IStore,
  ActionTypes,
  FETCH_START,
  FETCH_SUCCESS,
  FETCH_FAIL,
  FETCH_PEOPLE,
  FETCH_STARSHIPS,
  CLEAR_ERROR,
  SET_GAME_TYPE,
} from '../types';

const initialState: IState = {
  gameType: null,
  loading: false,
  error: null,
  starships: null,
  people: null,
  scoreLeft: 0,
  scoreRight: 0,
};

const initialStore: IStore = {
  state: initialState,
  dispatch: (value) => {},
};

export const Store = createContext<IStore>(initialStore);

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

type StoreProviderProps = {
  children: ReactNode;
};

export function StoreProvider({ children }: StoreProviderProps) {
  const [state, dispatch] = useReducer(reducer, initialState);
  return <Store.Provider value={{ state, dispatch }}>{children}</Store.Provider>;
}
