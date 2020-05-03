import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {AbstractMovieModel} from '../model/abstract-movie.model';
import {Observable} from 'rxjs';
import {BackendUrls} from './backend-urls';

@Injectable({
  providedIn: 'root'
})
export class SearchMovieService {
  constructor(private httpClient: HttpClient) {
  }

  fireSearch(searchInput: string, currentPage: number): Observable<SearchResponse> {
    const queryParams = `?search=${searchInput}&page=${currentPage}`;
    return this.httpClient.get<SearchResponse>(BackendUrls.SEARCH + queryParams);
  }
}

class SearchResponse {
  Search: AbstractMovieModel[];
  totalResults: number;
  Response: string;
}
