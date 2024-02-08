import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppService } from 'src/app/services/app.service';
import { HttpService } from 'src/app/services/http.service';
import { RouteService } from 'src/app/services/route.service';

@Component({
  selector: 'app-comingsoon',
  templateUrl: './comingsoon.component.html',
  styleUrls: ['./comingsoon.component.scss']
})
export class ComingsoonComponent implements OnInit , OnDestroy{
  movies
  isShowSpinner = false

  constructor (
    private httpService: HttpService, 
    private router: Router,
    private appService: AppService,
    private routeService: RouteService
  ) {}

  ngOnInit(): void {
    this.isShowSpinner = true

    this.httpService.getData('https://api.themoviedb.org/3/movie/upcoming')
    .subscribe({
      next: (res: any) => this.movies = res.results,
      error: err => console.log(err),
      complete: () => {
        this.isShowSpinner = false
      }
    })
  }

  ngOnDestroy(): void {
    this.routeService.setPreviousRoute('/comingsoon')
  }

  onNavigate(movieId: number): void {
    const movie = this.movies.filter(item => item.id === movieId)[0]

    this.appService.addWatchedMovie(movie)
    this.router.navigate(['browse', movieId])
  }
}
