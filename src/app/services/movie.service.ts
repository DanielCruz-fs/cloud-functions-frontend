import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Movie } from './../interfaces/interface';
import { of } from 'rxjs';
import { tap } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class MovieService {
  private movies: Movie[] = [];
  constructor(private http: HttpClient) { }

  getNominated() {
    if (this.movies.length > 0) {
      // of treats data as an observable 
      return of(this.movies);
    } else {
      return this.http.get<Movie[]>(`${environment.url}/api/movies`)
                      .pipe( tap( resp => this.movies = resp ) );
    }
  }
}
