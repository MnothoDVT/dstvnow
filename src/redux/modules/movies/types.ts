// Module main state
export interface MovieDataState {
  movies: IMovie[];
  sortBy: IOrderBy[];
}

export interface IOrderBy {
  label: string;
  valueToOrderBy: string;
}

export interface IMovie {
  id:number;
  type:string;
  rank:number;
  synopsis:string;
  title:string;
  imageUrl:string;
  releaseDate:number;
}
