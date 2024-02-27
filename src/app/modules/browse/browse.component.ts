import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { HttpService } from 'src/app/services/http.service';
import { RouteService } from 'src/app/services/route.service';

@Component({
  selector: 'app-browse',
  templateUrl: './browse.component.html',
  styleUrls: ['./browse.component.scss']
})
export class BrowseComponent implements OnInit , OnDestroy{
  movies: any = []
  parties: any = []
  bigMovie: any = []
  isShowLoader = false
  subscription: Subscription

  constructor(private httpService: HttpService, private routeService: RouteService) {}

  ngOnInit(): void {
    this.isShowLoader = true

  this.httpService.getMovies('1')
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

  ngOnDestroy(): void {
    this.routeService.setPreviousRoute('/browse')
  }

  private RandomMovie() {
    return  Math.floor(Math.random() * this.movies.length)
  }
}
