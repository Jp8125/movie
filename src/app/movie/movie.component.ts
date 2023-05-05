import { Component, OnInit } from '@angular/core';
import { MovieDataService } from '../movie-data.service';
import { Movie } from '../mv';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css'],
})
export class MovieComponent implements OnInit {
  ngOnInit(): void {
    this.mvservice.getMovies().subscribe((Obj) => {
      this.mvaar = Obj;
      console.log(this.mvaar);
      this.arv.params.subscribe((p) => {
        this.mobj = this.mvaar.find(
          (movie) => movie.MovieID == p['id']
        ) as Movie;
      
      });
    });
  }
  mvaar: Array<Movie> = [];
  mobj: Movie = {} as Movie;
  constructor(
    private mvservice: MovieDataService,
    private arv: ActivatedRoute
  ) { }
}
