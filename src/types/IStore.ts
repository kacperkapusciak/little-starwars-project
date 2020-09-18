import { Dispatch } from 'react';
import { IState } from '.';
import { ActionTypes } from '../store/actionTypes';

export interface IStore {
  state: IState;
  dispatch: Dispatch<ActionTypes>;
}
