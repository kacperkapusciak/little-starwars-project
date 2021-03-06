import reducer from '../reducer';
import { initialState } from '../';
import { actionTypes } from '../actionTypes';
import { GameState, GameType, IPerson, IStarship, Score } from '../../types';

describe('[store] reducer', () => {
  let person: IPerson, starship: IStarship;
  beforeEach(() => {
    person = {
      name: 'Luke Skywalker',
      height: '172',
      mass: '77',
      hair_color: 'blond',
      skin_color: 'fair',
      eye_color: 'blue',
      birth_year: '19BBY',
      gender: 'male',
    };

    starship = {
      name: 'CR90 corvette',
      model: 'CR90 corvette',
      manufacturer: 'Corellian Engineering Corporation',
      cost_in_credits: '3500000',
      length: '150',
      max_atmosphering_speed: '950',
      crew: '30-165',
      passengers: '600',
      cargo_capacity: '3000000',
      consumables: '1 year',
      hyperdrive_rating: '2.0',
      MGLT: '60',
      starship_class: 'corvette',
    };
  });

  it('should handle FETCH_START', () => {
    expect(reducer(initialState, { type: actionTypes.FETCH_START })).toEqual({
      ...initialState,
      loading: true,
    });

    expect(
      reducer(
        {
          ...initialState,
          error: { name: 'Error', message: 'An error occured' },
          loading: false,
        },
        { type: actionTypes.FETCH_START }
      )
    ).toEqual({
      ...initialState,
      loading: true,
    });
  });

  it('should handle FETCH_SUCCESS', () => {
    expect(reducer(initialState, { type: actionTypes.FETCH_SUCCESS })).toEqual(initialState);

    expect(
      reducer(
        {
          ...initialState,
          error: { name: 'Error', message: 'An error occured' },
          loading: true,
        },
        { type: actionTypes.FETCH_SUCCESS }
      )
    ).toEqual(initialState);
  });

  it('should handle FETCH_FAIL', () => {
    expect(
      reducer(initialState, {
        type: actionTypes.FETCH_FAIL,
        payload: { name: 'Error', message: 'An error occured' },
      })
    ).toEqual({ ...initialState, error: { name: 'Error', message: 'An error occured' } });

    expect(
      reducer(
        {
          ...initialState,
          error: null,
          loading: true,
        },
        { type: actionTypes.FETCH_FAIL, payload: { name: 'Error', message: 'An error occured' } }
      )
    ).toEqual({ ...initialState, error: { name: 'Error', message: 'An error occured' } });
  });

  it('should handle FETCH_PEOPLE', () => {
    expect(reducer(initialState, { type: actionTypes.FETCH_PEOPLE, payload: [person] })).toEqual({
      ...initialState,
      people: [person],
    });
  });

  it('should handle FETCH_STARSHIPS', () => {
    expect(
      reducer(initialState, { type: actionTypes.FETCH_STARSHIPS, payload: [starship] })
    ).toEqual({
      ...initialState,
      starships: [starship],
    });
  });

  it('should handle CLEAR_ERROR', () => {
    expect(
      reducer(
        { ...initialState, error: { name: 'Error', message: 'An error occured' } },
        { type: actionTypes.CLEAR_ERROR }
      )
    ).toEqual(initialState);
  });

  it('should handle SET_GAME_TYPE', () => {
    expect(
      reducer(initialState, { type: actionTypes.SET_GAME_TYPE, payload: GameType.PEOPLE })
    ).toEqual({ ...initialState, gameType: GameType.PEOPLE });

    expect(
      reducer(
        { ...initialState, gameType: GameType.STARSHIPS },
        { type: actionTypes.SET_GAME_TYPE, payload: GameType.PEOPLE }
      )
    ).toEqual({ ...initialState, gameType: GameType.PEOPLE });

    expect(
      reducer(
        { ...initialState, gameType: GameType.PEOPLE },
        { type: actionTypes.SET_GAME_TYPE, payload: GameType.STARSHIPS }
      )
    ).toEqual({ ...initialState, gameType: GameType.STARSHIPS });
  });

  it('should handle INCREMENT_SCORE', () => {
    expect(
      reducer(initialState, { type: actionTypes.INCREMENT_SCORE, payload: Score.LEFT })
    ).toEqual({
      ...initialState,
      score: {
        left: 1,
        right: 0,
      },
    });

    expect(
      reducer(initialState, { type: actionTypes.INCREMENT_SCORE, payload: Score.RIGHT })
    ).toEqual({
      ...initialState,
      score: {
        left: 0,
        right: 1,
      },
    });
  });

  it('should handle START_GAME', () => {
    expect(reducer(initialState, { type: actionTypes.START_GAME })).toEqual(initialState);

    expect(
      reducer(
        {
          ...initialState,
          gameState: GameState.INCONCLUSIVE,
          gamePeople: [person, person],
          gameStarships: [starship, starship],
        },
        { type: actionTypes.START_GAME }
      )
    ).toEqual(initialState);
  });

  it('should handle PLAY_GAME_PEOPLE', () => {
    expect(
      reducer(initialState, { type: actionTypes.PLAY_GAME_PEOPLE, payload: [person, person] })
    ).toEqual({
      ...initialState,
      gamePeople: [person, person],
    });
  });

  it('should handle PLAY_GAME_STARSHIPS', () => {
    expect(
      reducer(initialState, {
        type: actionTypes.PLAY_GAME_STARSHIPS,
        payload: [starship, starship],
      })
    ).toEqual({
      ...initialState,
      gameStarships: [starship, starship],
    });
  });

  it('should handle UPDATE_GAME_STATE', () => {
    expect(
      reducer(initialState, { type: actionTypes.UPDATE_GAME_STATE, payload: GameState.LEFT_WON })
    ).toEqual({
      ...initialState,
      gameState: GameState.LEFT_WON,
    });
  });

  it('should handle RESET_SCORE', () => {
    expect(
      reducer(
        {
          ...initialState,
          score: {
            left: 1,
            right: 1,
          },
        },
        { type: actionTypes.RESET_SCORE, payload: Score.LEFT }
      )
    ).toEqual(initialState);
  });
});
