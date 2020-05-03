import {AfterViewInit, Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {FullMovieModel} from '../../model/full-movie.model';
import {SingleMovieService} from '../../services/single-movie.service';
import {Observable, of} from 'rxjs';

@Component({
  selector: 'app-movie-page',
  templateUrl: './movie-page.component.html',
  styleUrls: ['./movie-page.component.scss']
})
export class MoviePageComponent implements OnInit, AfterViewInit {

  data: Observable<FullMovieModel>;
  search: Observable<string>;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private movieService: SingleMovieService) {
  }

  ngAfterViewInit(): void {
    this.route.params.subscribe(result => {
      const id = result.id;
      this.search = of(result.search);
      this.data = this.movieService.getMovie(id);
    });
  }

  ngOnInit(): void {
    this.search = of(this.route.snapshot.paramMap.get('search'));
    const id = this.route.snapshot.paramMap.get('id');
    this.data = this.movieService.getMovie(id);
  }

  navigateToSearchPage() {
    this.router.navigate([`../..`], {relativeTo: this.route, skipLocationChange: false});
  }

}
