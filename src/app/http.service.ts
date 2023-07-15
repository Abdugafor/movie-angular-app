import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  constructor(private http: HttpClient) { }

  getMovies() {
    return this.http.get('https://api.themoviedb.org/3/movie/popular', {
      headers: {
        accept: 'application/json',
        Authorization:  'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjYTI1ZjdkOGY4ZjY4M2NkM2NiMDBiM2M2Zjc0ZDU2NCIsInN1YiI6IjY0YjJhN2UwMjNkMjc4MDBlODhhZjkyMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ADiuIWDIbBYM-qGh4HspfuQUhFGbPIwo04KqYiASqKo'
      }
    })
  }
 
}
