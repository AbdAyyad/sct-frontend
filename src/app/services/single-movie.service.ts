import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {FullMovieModel} from '../model/full-movie.model';
import {Observable} from 'rxjs';
import {BackendUrls} from './backend-urls';

@Injectable({
  providedIn: 'root'
})
export class SingleMovieService {

  constructor(private httpClient: HttpClient) {
  }

  getMovie(id: string): Observable<FullMovieModel> {
    const queryParams = `?id=${id}`;
    return this.httpClient.get<FullMovieModel>(BackendUrls.GET_MOVIE + queryParams);
  }

}
