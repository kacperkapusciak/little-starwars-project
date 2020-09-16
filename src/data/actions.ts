import { Dispatch } from 'react';
import axios from '../axios-instance';
import { FETCH_PEOPLE_AND_STARSHIPS_COUNT, ActionTypes, ICountResponse, ICount } from '../types';

export const fetchPeopleAndStarshipsCount = async (dispatch: Dispatch<ActionTypes>) => {
  const promises = [axios.get('people/'), axios.get('starships/')];

  const [peopleResponse, starshipResponse] = (await Promise.all(promises)) as ICountResponse[];

  const payload: ICount = {
    people: peopleResponse.data.count,
    starships: starshipResponse.data.count,
  };

  dispatch({
    type: FETCH_PEOPLE_AND_STARSHIPS_COUNT,
    payload,
  });
};
