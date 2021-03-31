import React, {useEffect } from 'react';
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { getMoviesRequest } from './redux/modules/movies/actions';
import { getMovies } from './redux/modules/movies/selectors';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import { Entry, IComponent } from './redux/modules/movies/types';
import { Col, Container, Button, Row, Card } from 'react-bootstrap';
import MovieCard from "./components/card";
import MovieList from './screens/movieList';

function App() {
 return (
  <MovieList />
  )

}

export default App;
