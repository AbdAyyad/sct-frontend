import {Component, Input, OnInit} from '@angular/core';
import {AbstractMovieModel} from '../../model/abstract-movie.model';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.scss']
})
export class MovieListComponent implements OnInit {
  @Input() data: AbstractMovieModel[];

  constructor(private router: Router,
              private route: ActivatedRoute) {
  }

  ngOnInit(): void {
  }

  navigateToMovie(id: string) {
    this.router.navigate([`movie/${id}`], {relativeTo: this.route, skipLocationChange: false});
  }
}
