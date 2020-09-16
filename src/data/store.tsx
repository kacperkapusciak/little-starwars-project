import React, { createContext, useReducer, ReactNode } from 'react';

import { IState, IStore, ActionTypes, FETCH_PEOPLE_AND_STARSHIPS_COUNT } from '../types';

const initialState: IState = {
  count: {
    starships: 0,
    people: 0,
  },
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
    case FETCH_PEOPLE_AND_STARSHIPS_COUNT:
      return { ...state, count: action.payload };
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
