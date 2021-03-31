/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { put, takeLatest, call, delay } from "redux-saga/effects";
import { getMoviesRequest, getMoviesError,getMoviesSuccess } from "./actions";
import movieData from "../../../mock/movies.json"
import { IMovie, IOrderBy } from "./types";
export interface Payload {
  [key : string]: any;
}

export function* fetchAll() {

  console.log("off we go ")
  try {
    //pause exec
      yield delay(400)

      const sortBy : IOrderBy[] = movieData.components[0].items as IOrderBy[]
      const movies : IMovie[] =  movieData.components[1].items as IMovie[]

      console.log({sortBy})
      yield put(getMoviesSuccess({sortBy, movies}))

  } catch (error) {
    yield put(getMoviesError({ error : "An error occured" }));
  }
}

export function* watchMovieSagas() {
  yield takeLatest(getMoviesRequest.type, fetchAll);
}
