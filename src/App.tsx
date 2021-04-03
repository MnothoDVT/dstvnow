import React from 'react';
import './App.css';
import Loader from './components/loader';
import MovieList from './screens/movieList';

function App() {
 return (
   <>
      <Loader />
      <MovieList />
    </>
  )

}

export default App;
