import React, {useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getMoviesRequest } from '../../redux/modules/movies/actions';
import { getMovies, getSorts } from '../../redux/modules/movies/selectors';
import { IMovie, IOrderBy } from '../../redux/modules/movies/types';
import { Button, Col, Container, OverlayTrigger, Popover, Row} from 'react-bootstrap';
import MovieCard from "../../components/card";
import MovieDetails from '../../components/modal';
import { useLoading } from '../../redux/modules/loading/selectors';
import { ClipLoader } from 'react-spinners';
import SortIcon from '@material-ui/icons/Sort';

function MovieList() {

  const dispatch = useDispatch();
  const [visibleMovie, setVisibleMovie] = useState<IMovie>();
  const [sort, setSort] = useState<string>("Release Date")
  const [modalVisible, setModalVisible] = useState<boolean>(false)
  const watchList: IMovie[] = useSelector(getMovies)
  const sortOptions : IOrderBy[]|undefined = useSelector(getSorts)
  const sortByRank = sort !== "Release Date"
  const sortedWatchList = sortByRank ? [...watchList]?.sort((a,b) => a.rank - b.rank) : [...watchList]?.sort((a,b)=> a.releaseDate - b.releaseDate)
  const loading = useSelector(useLoading)
  useEffect(()=>{
    dispatch(getMoviesRequest());
  },[dispatch]);

 

  console.log("filtered watch list ", loading )


 return (

loading ? <div className="loader" >
<ClipLoader color={"blue"} loading={loading} size={150} />
</div> :
<Container fluid="xl">
      <MovieDetails onClose={()=> setModalVisible(false)} isOpen={modalVisible} movie={visibleMovie} />
      <Row>

      </Row>
      <Row xl={1}  className="sort">
                <p>
                    Sort By
                </p>
      <OverlayTrigger
          trigger="click"
          key={"bottom"}
          placement={"bottom"}
          overlay={
            <Popover id={`popover-positioned-${"bottom"}`}>
              <Popover.Title as="h3">{`Popover ${"bottom"}`}</Popover.Title>
              <Popover.Content>
                {sortOptions?.map(({label}) => (
                  <div onClick={()=> setSort( label || "Release Date")}>
                    {sort === label ?
                    <strong>{label}</strong>:
                    <p>{label}</p>}
                  </div>))}
              </Popover.Content>
            </Popover>
          }
        >
        <Button variant="secondary"> {sort}  <SortIcon /></Button>
      </OverlayTrigger>

      </Row>
      {sortedWatchList?.map((movie : IMovie, index): JSX.Element | null =>(
       (index %2 === 0) ?  <Row className="row">
          <Col sm>
          <MovieCard onClick={()=>{
              setVisibleMovie(movie)
              setModalVisible(true)
          }} movie={movie} />
          </Col>
          {sortedWatchList[index+1] && <Col md>
            <MovieCard onClick={()=>{
              setVisibleMovie(sortedWatchList[index+1])
              setModalVisible(true)
          }} movie={sortedWatchList[index+1]} />
          </Col>}
        </Row> : null
      ))}
  </Container>
  )

}

export default MovieList;
