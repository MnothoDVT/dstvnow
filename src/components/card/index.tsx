import {Card , Button} from 'react-bootstrap';
import './card.css'
import { IMovie } from '../../redux/modules/movies/types';
import Strings from '../../constants/Strings';

interface MovieCardProps{
  movie : IMovie; 
  onClick : ()=> void;
}
export default function MovieCard(props : MovieCardProps ) {
  const {movie , onClick} = props

  return (
    <Card className={"card"}  key={movie.id} onClick={onClick} style={{ width: '18rem' }}>
    <Card.Img variant="top" src={movie.imageUrl} />
    <Card.Body>
      <Card.Title className="title">{movie.title}</Card.Title>
      <Card.Text className="text">
      {movie.releaseDate}
      </Card.Text>
      <Button onClick={onClick} variant="link" className="button" >{Strings.viewDetails}</Button>
    </Card.Body>
  </Card>
  );
}
