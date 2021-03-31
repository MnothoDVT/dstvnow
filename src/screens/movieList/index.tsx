import React, {useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getMoviesRequest } from '../../redux/modules/movies/actions';
import { getMovies } from '../../redux/modules/movies/selectors';
import { Entry, IComponent } from '../../redux/modules/movies/types';
import { Col, Container, Button, Row, Card } from 'react-bootstrap';
import MovieCard from "../../components/card";
import MovieDetails from '../../components/modal';

function MovieList() {

  const dispatch = useDispatch();
  const [visibleMovie, setVisibleMovie] = useState<Entry>();
  const [modalVisible, setModalVisible] = useState<boolean>(false)
  const moviesObject: IComponent|undefined = useSelector(getMovies).movieData?.components[1];
  const watchList : Entry[]|undefined = moviesObject?.items
  console.log({watchList})
  useEffect(()=>{
    dispatch(getMoviesRequest())
  },[dispatch]);

 

  console.log("filtered watch list ", )

 return (
  <Container fluid="sm">
      <MovieDetails onClose={()=> setModalVisible(false)} isOpen={modalVisible} movie={visibleMovie} />
      {watchList?.map((movie : Entry, index): JSX.Element | null =>(
       (index %2 === 0) ?  <Row className="row">
          <Col md>
          <MovieCard onClick={()=>{
              setVisibleMovie(movie)
              setModalVisible(true)
          }} movie={movie} />
          </Col>
          {watchList[index+1] && <Col md>
            <MovieCard onClick={()=>{
              setVisibleMovie(movie)
              setModalVisible(true)
          }} movie={watchList[index+1]} />
          </Col>}
        </Row> : null
      ))}

  </Container>
  )

}

export default MovieList;
