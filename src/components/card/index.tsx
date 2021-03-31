import React from 'react';
import {Card , Button} from 'react-bootstrap';

import { IMovie } from '../../redux/modules/movies/types';

interface MovieCardProps{
  movie : IMovie; 
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
      <Button onClick={onClick} variant="primary">View Details</Button>
    </Card.Body>
  </Card>
  );
}
