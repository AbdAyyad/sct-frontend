import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator, PageEvent} from '@angular/material/paginator';
import {SearchMovieService} from '../../services/search-movie.service';
import {ActivatedRoute, Router} from '@angular/router';
import {AbstractMovieModel} from '../../model/abstract-movie.model';

@Component({
  selector: 'app-search-page',
  templateUrl: './search-page.component.html',
  styleUrls: ['./search-page.component.scss']
})
export class SearchPageComponent implements OnInit, AfterViewInit {

  private currentPage = 1;
  totalResult: number;
  currentSearch: string;
  searchResult: AbstractMovieModel[];
  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(private searchMovieService: SearchMovieService,
              private activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.currentSearch = this.activatedRoute.snapshot.paramMap.get('search');
  }

  onPageChange(event: PageEvent) {

    this.currentPage = event.pageIndex + 1;

    this.executeSearch();
  }

  executeSearch() {
    console.log(this.currentSearch);
    this.searchMovieService.fireSearch(this.currentSearch, this.currentPage).subscribe(result => {
      this.totalResult = result.totalResults;
      this.searchResult = [...result.Search];
    });
  }

  ngAfterViewInit(): void {
    this.activatedRoute.params.subscribe(params => {
      this.currentSearch = this.activatedRoute.snapshot.paramMap.get('search');
      this.executeSearch();
      this.paginator.firstPage();
    });
  }

}
