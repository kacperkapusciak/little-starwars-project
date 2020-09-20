import React from 'react';
import { Card, CardContent, Grid, Typography } from '@material-ui/core';
import { IPerson } from '../types';

interface PersonCardProps {
  person: IPerson | null;
}

export const PersonCard = ({ person }: PersonCardProps) => {
  if (!person) return null;

  const details = [
    {
      label: 'height',
      content: person.height !== 'unknown' ? `${person.height} cm` : person.height,
    },
    {
      label: 'mass',
      content: person.mass !== 'unknown' ? `${person.mass} kg` : person.mass,
    },
    {
      label: 'year of birth',
      content: person.birth_year,
    },
    {
      label: 'gender',
      content: person.gender,
    },
    {
      label: 'hair color',
      content: person.hair_color,
    },
    {
      label: 'eye color',
      content: person.eye_color,
    },
  ];

  return (
    <Card elevation={4}>
      <CardContent>
        <Typography variant="h5" gutterBottom align="center">
          {person.name}
        </Typography>
        <Grid container spacing={2}>
          {details.map((detail) => (
            <Grid item xs={6} key={detail.label}>
              <Typography variant="overline" display="block">
                {detail.label}
              </Typography>
              <Typography
                variant="body1"
                gutterBottom
                color={detail.label === 'height' ? 'primary' : 'textPrimary'}
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
