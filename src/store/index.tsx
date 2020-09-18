import React, { createContext, useReducer, ReactNode } from 'react';

import reducer from './reducer';

import { IState, IStore } from '../types';

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

type StoreProviderProps = {
  children: ReactNode;
};

export function StoreProvider({ children }: StoreProviderProps) {
  const [state, dispatch] = useReducer(reducer, initialState);
  return <Store.Provider value={{ state, dispatch }}>{children}</Store.Provider>;
}
