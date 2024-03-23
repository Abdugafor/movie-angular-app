import { Component, OnDestroy, OnInit } from '@angular/core';
import { Movie } from 'src/app/models/interfaces/movies.interface';
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

  onNavigate(movie: Movie): void {

    this.routeService.navigate(movie)
  }
}
