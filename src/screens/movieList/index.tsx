import React, {useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getMoviesRequest } from '../../redux/modules/movies/actions';
import { getMovies, getSorts } from '../../redux/modules/movies/selectors';
import { IMovie, IOrderBy } from '../../redux/modules/movies/types';
import { Button, Col, Container, OverlayTrigger, Popover, Row} from 'react-bootstrap';
import MovieCard from '../../components/card';
import MovieDetails from '../../components/modal';
import { useLoading } from '../../redux/modules/loading/selectors';
import { ClipLoader } from 'react-spinners';
import SortIcon from '@material-ui/icons/Sort';
import Strings from '../../constants/Strings';
import "./movies.css"

function MovieList() {

  const dispatch = useDispatch();
  const [visibleMovie, setVisibleMovie] = useState<IMovie>();
  const [sort, setSort] = useState<string>('Release Date')
  const [modalVisible, setModalVisible] = useState<boolean>(false)
  const watchList: IMovie[] = useSelector(getMovies)
  const sortOptions : IOrderBy[]|undefined = useSelector(getSorts)
  const sortByRank = sort !== 'Release Date'
  const sortedWatchList = sortByRank ? [...watchList]?.sort((a,b) => a.rank - b.rank) : [...watchList]?.sort((a,b) => a.releaseDate - b.releaseDate)
  const loading = useSelector(useLoading)
  useEffect(() => {
    dispatch(getMoviesRequest());
  },[dispatch]);



 return (

loading ? <Container fluid className="loader" >
<ClipLoader color="blue" loading={loading} size={150} />
</Container > :
 <>
 <MovieDetails onClose={() => setModalVisible(false)} isOpen={modalVisible} movie={visibleMovie} />
<Container className="container" fluid >
      
 <strong className="title">{Strings.watchList}</strong>

      <Row className="sort">
        <Col lg={4} md={4} />
        <Col lg={4} md={4} />
        <Col md>
          <p className="text">
              {Strings.sortBy}
          </p>
        </Col>
        <Col md >
          <OverlayTrigger
            trigger="click"
            key="bottom"
            placement="bottom"
            overlay={
              <Popover id={`popover-positioned-${'bottom'}`}>
                <Popover.Title as="h3">Sort</Popover.Title>
                <Popover.Content>
                  {sortOptions?.map(({label}) => 
                    <div key={label} onClick={() => setSort( label || 'Release Date')}>
                      {sort === label ?
                      <strong>{label}</strong>:
                      <p>{label}</p>}
                    </div>)}
                </Popover.Content>
              </Popover>
            }>
            <Button variant="secondary"> {sort}  <SortIcon /></Button>
          </OverlayTrigger>
        </Col>
      </Row>
      {sortedWatchList?.map((movie : IMovie, index): JSX.Element | null => (
       index %2 === 0 ?  <Row noGutters className="row">
          <Col sm>
          <MovieCard onClick={() => {
              setVisibleMovie(movie)
              setModalVisible(true)
          }} movie={movie}
             />
          </Col>
          {sortedWatchList[index+1] && <Col md>
            <MovieCard onClick={() => {
              setVisibleMovie(sortedWatchList[index+1])
              setModalVisible(true)
          }} movie={sortedWatchList[index+1]}
             />
          </Col>}
        </Row> : null
      ))}
  </Container>
  </>
  )

}

export default MovieList;
