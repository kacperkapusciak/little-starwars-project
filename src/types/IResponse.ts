import { IPerson } from './IPerson';
import { IStarship } from './IStarship';

interface IResponse {
  count: number;
  next: string | null;
  previous: string | null;
}

export interface IPeopleResponse extends IResponse {
  results: IPerson[];
}

export interface IStarshipsResponse extends IResponse {
  results: IStarship[];
}
