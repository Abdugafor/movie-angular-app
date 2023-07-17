import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  constructor(private http: HttpClient) { }

  private getData(url: string) {
    return this.http.get(url, {
      headers: {
        accept: 'application/json',
        Authorization:  'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjYTI1ZjdkOGY4ZjY4M2NkM2NiMDBiM2M2Zjc0ZDU2NCIsInN1YiI6IjY0YjJhN2UwMjNkMjc4MDBlODhhZjkyMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ADiuIWDIbBYM-qGh4HspfuQUhFGbPIwo04KqYiASqKo'
      }
    })
  }

  public getMovies() {
    return this.getData('https://api.themoviedb.org/3/movie/popular')
  }
 
}
