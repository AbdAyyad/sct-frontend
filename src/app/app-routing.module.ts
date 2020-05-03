import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {HomePageComponent} from './pages/home-page/home-page.component';
import {SearchPageComponent} from './pages/search-page/search-page.component';
import {MoviePageComponent} from './pages/movie-page/movie-page.component';


const routes: Routes = [
  {path: '', component: HomePageComponent},
  {path: ':search', component: SearchPageComponent},
  {path: ':search/movie/:id', component: MoviePageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
