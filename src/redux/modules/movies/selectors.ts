import { AppState } from "../../root.reducer";

// here we can grab a piece of the state
export const getMovies = (app: AppState) => app.movieData;