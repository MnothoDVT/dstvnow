/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { put, takeLatest } from "redux-saga/effects";
import { getMoviesRequest, getMoviesError,getMoviesSuccess } from "./actions";
import movieData from "../../../mock/movies.json"
export interface Payload {
  [key : string]: any;
}

export function* fetchAll() {

  console.log("off we go ")
  try {
    //pause exec
      console.log("we're here")
      yield put(getMoviesSuccess({movieData}))


    
  } catch (error) {
    yield put(getMoviesError({ error : "An error occured" }));
  }
}

export function* watchMovieSagas() {
  yield takeLatest(getMoviesRequest.type, fetchAll);
}
