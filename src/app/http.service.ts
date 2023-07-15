import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  constructor(private http: HttpClient) { }

  getMovies() {
    return this.http.get('http://www.omdbapi.com/?t=Avatar&y=2022&apikey=186934d2&s', {
      headers: {
        'X-RapidAPI-Key': 'e15ff0ada6mshb6590593374ec5ep1c0b2djsn056a8fcbd532',
		    'X-RapidAPI-Host': 'moviesdatabase.p.rapidapi.com'
      }
    })
  }
 
}
