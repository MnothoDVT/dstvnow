import { createReducer } from '@reduxjs/toolkit';
import { getMoviesSuccess } from './actions';
import { MovieDataState } from './types';

const INITIAL_STATE: MovieDataState = {
  movies: [],
  sortBy :[],
};

export const movieReducer = createReducer(INITIAL_STATE, builder => {
  builder
    .addCase(getMoviesSuccess, (state, action) => {
      const {payload} = action
      return { ...state,  ...payload };
    })
});
