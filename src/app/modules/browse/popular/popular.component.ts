import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/http.service';

@Component({
  selector: 'app-popular',
  templateUrl: './popular.component.html',
  styleUrls: ['./popular.component.scss']
})

export class PopularComponent implements OnInit {
  movies: any = []

  constructor(private httpService: HttpService) {}

  ngOnInit(): void {
    this.httpService.getMovies()
    .subscribe({
      next: res => this.movies = res,
      error: error => console.log('error'),
      complete: () => {
        this.movies = this.movies.results
        console.log(this.movies)
      }
    })
  }
}
