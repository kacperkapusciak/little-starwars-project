import { Dispatch } from 'react';
import { IState, ActionTypes } from '.';

export interface IStore {
  state: IState;
  dispatch: Dispatch<ActionTypes>;
}
