import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Container,
  Grid,
  Typography,
} from '@material-ui/core';

import { Store } from '../store';
import { fetchPeople, fetchStarships, setGameType } from '../store/actions';
import { GameType } from '../types';

import charactersImg from '../assets/characters.jpg';
import starshipsImg from '../assets/starships.jpg';

const Choose = () => {
  const history = useHistory();
  const { state, dispatch } = useContext(Store);
  const { people, starships } = state;

  const choose = (gameType: GameType) => {
    setGameType(dispatch, gameType);

    if (gameType === GameType.PEOPLE && !people.length) {
      fetchPeople(dispatch);
    } else if (gameType === GameType.STARSHIPS && !starships.length) {
      fetchStarships(dispatch);
    }

    history.push('/game');
  };

  const cards = [
    { gameType: GameType.PEOPLE, image: charactersImg, name: 'characters' },
    { gameType: GameType.STARSHIPS, image: starshipsImg, name: 'starships' },
  ];

  return (
    <Container maxWidth="md">
      <Grid container spacing={4} alignItems="center" style={{ height: '100vh' }}>
        {cards.map((card) => (
          <Grid item sm={12} md key={card.name}>
            <Card>
              <CardActionArea onClick={() => choose(card.gameType)}>
                <CardMedia
                  component="img"
                  height="440"
                  image={card.image}
                  title={`Play with ${card.name}`}
                />
                <CardContent>
                  <Typography variant="h5" component="h2" align="center">
                    Play with {card.name}
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Choose;
