import {Component, Input, OnInit} from '@angular/core';
import {FullMovieModel} from '../../model/full-movie.model';

@Component({
  selector: 'app-single-movie',
  templateUrl: './single-movie.component.html',
  styleUrls: ['./single-movie.component.scss']
})
export class SingleMovieComponent implements OnInit {
  @Input() data: FullMovieModel;

  constructor() {
  }

  ngOnInit(): void {
  }

}
