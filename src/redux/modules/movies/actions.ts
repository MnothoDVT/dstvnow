import { createAction } from '@reduxjs/toolkit';
import { MovieDataState } from './types';

export const getMoviesRequest = createAction('@MOVIES/GET_ALL_API_REQUEST');

export const getMoviesSuccess = createAction<MovieDataState>('@MOVIES/GET_API_SUCCESS');

export const getMoviesError = createAction<{ error: string }>('@MOVIES/GET_API_ERROR');


