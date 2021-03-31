// Module main state
export interface MovieDataState {
  movieData?: {
    type: string;
    components: IComponent[];
  };
}

export interface IComponent {
  type: string;
  items: Entry[]
}
export interface Entry {
  label?: string;
  valueToOrderBy?: string;
  id?:number;
  type?:string;
  rank?:number;
  synopsis?:string;
  title?:string;
  imageUrl?:string;
  releaseDate?:number;
}
