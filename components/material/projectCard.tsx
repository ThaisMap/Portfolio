import {
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from '@material-ui/core';
import React from 'react';
import { IProject } from '../../types';
import Link from 'next/link';

interface CardProps {
  project: IProject;
}

function ProjectCard(props: CardProps) {
  const { name, technologies, page } = props.project;

  const cover = '/images/' + props.project.images[0];

  return (
    <Grid item md={4} sm={6} xs={12}>
      <Link href={`/${page}`}>
        <Card>
          <CardActionArea>
            <CardMedia
              component='img'
              alt={`Projeto ${name}`}
              height='250'
              image={cover}
            />
            <CardContent>
              <Typography variant='h6'>{name}</Typography>
              <Typography variant='subtitle1'>{technologies}</Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </Link>
    </Grid>
  );
}

export default ProjectCard;
