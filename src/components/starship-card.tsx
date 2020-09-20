import React from 'react';
import { Card, CardContent, Grid, Typography } from '@material-ui/core';
import { IStarship } from '../types';

interface StarshipCardProps {
  starship: IStarship | null;
}

const StarshipCard = ({ starship }: StarshipCardProps) => {
  if (!starship) return null;

  const details: {
    label: string;
    content: string;
    grid: boolean | 'auto' | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | undefined;
  }[] = [
    {
      label: 'model',
      content: starship.model,
      grid: 12,
    },
    {
      label: 'manufacturer',
      content: starship.manufacturer,
      grid: 12,
    },
    {
      label: 'crew',
      content: starship.crew,
      grid: 6,
    },
    {
      label: 'length',
      content: starship.length !== 'unknown' ? `${starship.length} m` : starship.length,
      grid: 6,
    },
    {
      label: 'cost',
      content:
        starship.cost_in_credits !== 'unknown'
          ? `${starship.cost_in_credits} credits`
          : starship.cost_in_credits,
      grid: 6,
    },
    {
      label: 'hyperdrive rating',
      content: starship.hyperdrive_rating,
      grid: 6,
    },
  ];

  return (
    <Card elevation={4}>
      <CardContent>
        <Typography variant="h5" gutterBottom align="center">
          {starship.name}
        </Typography>
        <Grid container spacing={2}>
          {details.map((detail) => (
            <Grid item xs sm={detail.grid} key={detail.label}>
              <Typography variant="overline" display="block">
                {detail.label}
              </Typography>
              <Typography
                variant="body1"
                gutterBottom
                color={detail.label === 'crew' ? 'primary' : 'textPrimary'}
              >
                {detail.content}
              </Typography>
            </Grid>
          ))}
        </Grid>
      </CardContent>
    </Card>
  );
};

export default StarshipCard;
