import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { HttpService } from 'src/app/http.service';

@Component({
  selector: 'app-browse',
  templateUrl: './browse.component.html',
  styleUrls: ['./browse.component.scss']
})
export class BrowseComponent implements OnInit {
  movies: any = []
  parties: any = []
  bigMovie: any = []
  isShowLoader = false
  subscription: Subscription

  constructor(private httpService: HttpService) {}

  ngOnInit(): void {
    this.isShowLoader = true

  this.httpService.getMovies()
    .subscribe({
      next: (res: any) => this.movies = res.results,
      error: error => console.log('error'),
      complete: () => {
        this.parties = this.movies.splice(0, 4)
        this.bigMovie = this.movies[this.RandomMovie()]
        this.isShowLoader = false
      }
    })
  }

  

  private RandomMovie() {
    return  Math.floor(Math.random() * this.movies.length)
  }
}
