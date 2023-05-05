import { Component} from '@angular/core';
import { MovieDataService } from '../movie-data.service';
import { Filter, Movie } from '../mv';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent {
  mlist:Array<Movie>=[]
  filterlist:Array<Movie>=[]
  dname:string=""
  actor:string=''
  movie:string=''
  fil1:Filter={} as Filter
  constructor(private service:MovieDataService){
  this.service.getMovies().subscribe(list=>{
    this.mlist=list;
    this.filterlist=list
  })
  this.service.getFilter().subscribe(obj=>{
    this.fil1=obj;
   console.log(this.fil1);
  })
}
name(val:string){
this.dname=val;
console.log(this.dname);
}
filter(val:string)
{
this.filterlist=this.mlist.filter(Obj=>Obj.Details.ActorsNames.includes(val))
console.log(this.filterlist);

}
filter2(movie:string)
{
this.filterlist=this.mlist.filter(Obj=>Obj.MovieName==movie)
console.log(this.filterlist);
}
filter3(director:string)
{
this.filterlist=this.mlist.filter(Obj=>Obj.Details.DirectorName.includes(director))
console.log(this.filterlist);
}
}
