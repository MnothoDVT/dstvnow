import { combineReducers } from "@reduxjs/toolkit";
import { loadingReducer } from "./modules/loading/reducer";
import { movieReducer } from "./modules/movies/reducer";

export const reducers = combineReducers({
  loading: loadingReducer,
  movieData: movieReducer,
});

export type AppState = ReturnType<typeof reducers>;
