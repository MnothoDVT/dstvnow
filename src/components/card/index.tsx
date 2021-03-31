import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {Card , Button} from 'react-bootstrap';

import { Entry } from '../../redux/modules/movies/types';

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },

}));
interface MovieCardProps{
  movie : Entry; 
  onClick : ()=> void;
}
export default function MovieCard(props : MovieCardProps ) {
  const {movie , onClick} = props

  return (
    <Card onClick={onClick} style={{ width: '18rem' }}>
    <Card.Img variant="top" src={movie.imageUrl} />
    <Card.Body>
      <Card.Title>{movie.title}</Card.Title>
      <Card.Text>
      {movie.releaseDate}
      </Card.Text>
      <Button onClick={onClick} variant="primary">Go somewhere</Button>
    </Card.Body>
  </Card>
  );
}
