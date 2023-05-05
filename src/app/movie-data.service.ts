import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Filter, Movie } from './mv';

@Injectable({
  providedIn: 'root'
})
export class MovieDataService {

  constructor(private http:HttpClient) { }
  getMovies(){
    return this.http.get<Array<Movie>>('./assets/Movie.json');
  }
  getFilter(){
    return this.http.get<Filter>('./assets/filter.json')
   }
}
