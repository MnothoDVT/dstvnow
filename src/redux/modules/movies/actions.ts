import { createAction } from "@reduxjs/toolkit";
import { MovieDataState } from "./types";

export const getMoviesRequest = createAction("@MOVIES/GET_ALL");

export const getMoviesSuccess = createAction<MovieDataState>("@MOVIES/GET_SUCCESS");

export const getMoviesError = createAction<{ error: string }>("@MOVIES/GET_ERROR");


