import { Dispatch } from 'react';
import axios from '../axios-instance';

import { actionTypes, ActionTypes } from './actionTypes';
import { GameType, IPeopleResponse, IStarshipsResponse, Score } from '../types';

// The swapi has many holes in IDs, especially for starships. Calling the api by people/:id is
// a game of luck - you never know if the resource is there. I think that the most reliable way
// is to fetch all people and keep them in RAM. There aren't that many entities so it should be fine.
export const fetchPeople = async (dispatch: Dispatch<ActionTypes>) => {
  dispatch({ type: actionTypes.FETCH_START });

  try {
    // fetch first page to get count and first 10 results
    const { data } = await axios.get<IPeopleResponse>('people/');
    const { count, results: people } = data;

    // api provides 10 results per page
    const numOfPages = Math.ceil(count / 10);

    // ie. [2, 3, 4, 5] when numOfPages is 5
    const helper = Array.from({ length: numOfPages }, (_, i) => i + 1).splice(1, numOfPages);

    const promises = helper.map((num) => axios.get<IPeopleResponse>(`people?page=${num}`));
    const responses = await Promise.all(promises);

    const restOfPeopleInMatrix = responses.map((response) => response.data.results);

    const restOfPeople = restOfPeopleInMatrix.flat();

    const payload = [...people, ...restOfPeople];

    dispatch({ type: actionTypes.FETCH_PEOPLE, payload });
    dispatch({ type: actionTypes.FETCH_SUCCESS });
  } catch (error) {
    dispatch({ type: actionTypes.FETCH_FAIL, payload: error.toJSON() });
  }
};

// see comments for fetchPeople
export const fetchStarships = async (dispatch: Dispatch<ActionTypes>) => {
  dispatch({ type: actionTypes.FETCH_START });

  try {
    const { data } = await axios.get<IStarshipsResponse>('starships/');
    const { count, results: starships } = data;

    const numOfPages = Math.ceil(count / 10);

    const helper = Array.from({ length: numOfPages }, (_, i) => i + 1).splice(1, numOfPages);
    const promises = helper.map((num) => axios.get<IStarshipsResponse>(`starships?page=${num}`));
    const responses = await Promise.all(promises);

    const restOfStarshipsInMatrix = responses.map((response) => response.data.results);

    const restOfStarships = restOfStarshipsInMatrix.flat();

    const payload = [...starships, ...restOfStarships];

    dispatch({ type: actionTypes.FETCH_STARSHIPS, payload });
    dispatch({ type: actionTypes.FETCH_SUCCESS });
  } catch (error) {
    dispatch({ type: actionTypes.FETCH_FAIL, payload: error.toJSON() });
  }
};

export const clearError = (dispatch: Dispatch<ActionTypes>) => {
  dispatch({ type: actionTypes.CLEAR_ERROR });
};

export const setGameType = (dispatch: Dispatch<ActionTypes>, gameType: GameType) => {
  dispatch({ type: actionTypes.SET_GAME_TYPE, payload: gameType });
};

export const incrementScore = (dispatch: Dispatch<ActionTypes>, score: Score) => {
  dispatch({ type: actionTypes.INCREMENT_SCORE, payload: score });
};
