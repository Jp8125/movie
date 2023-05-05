import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MovieListComponent } from './movie-list/movie-list.component';
import { MovieComponent } from './movie/movie.component';

const routes: Routes = [
  {path:'',redirectTo:'movies',pathMatch:'full'},
  {path:'movies',component:MovieListComponent,children:[{path:'movie/:id',component:MovieComponent}]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
