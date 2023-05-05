export interface Movie  {
    MovieID:number,

    MovieName:string,

    Details: {
      DirectorName:string,

      ActorsNames: Array<string>,

      VideoLink:string
    }
  }
  export interface Filter{
    Directors: Array<string>,
  
    Movies: Array<Mv>,
  
    Actors: Array<string>
  }
  export interface Mv{
    
        MovieID: number,
  
        MovieName: string
      
  }
  