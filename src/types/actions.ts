import { ICount, IStarship, IPerson } from '.';

export const FETCH_PEOPLE_AND_STARSHIPS_COUNT = 'FETCH_PEOPLE_AND_STARSHIPS_COUNT';
export const FETCH_TWO_RANDOM_STARSHIPS = 'FETCH_TWO_RANDOM_STARSHIPS';
export const FETCH_TWO_RANDOM_PEOPLE = 'FETCH_TWO_RANDOM_PEOPLE';

interface FetchPeopleAndStarshipsCountAction {
  type: typeof FETCH_PEOPLE_AND_STARSHIPS_COUNT;
  payload: ICount;
}

interface FetchStarshipsAction {
  type: typeof FETCH_TWO_RANDOM_STARSHIPS;
  payload: [IStarship, IStarship];
}

interface FetchPeopleAction {
  type: typeof FETCH_TWO_RANDOM_PEOPLE;
  payload: [IPerson, IPerson];
}

export type ActionTypes =
  | FetchPeopleAndStarshipsCountAction
  | FetchStarshipsAction
  | FetchPeopleAction;
