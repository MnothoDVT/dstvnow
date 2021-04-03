import { all } from 'redux-saga/effects';

import { watchMovieSagas } from './modules/movies/sagas';

export function* sagas(){
  yield all([watchMovieSagas()]);
}
