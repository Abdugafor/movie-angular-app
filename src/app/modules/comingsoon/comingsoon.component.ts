import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppService } from 'src/app/services/app.service';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-comingsoon',
  templateUrl: './comingsoon.component.html',
  styleUrls: ['./comingsoon.component.scss']
})
export class ComingsoonComponent implements OnInit {
  movies
  isShowSpinner = false

  constructor (
    private httpService: HttpService, 
    private router: Router,
    private appService: AppService
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

  onNavigate(movieId: number): void {
    const movie = this.movies.filter(item => item.id === movieId)[0]

    this.appService.addWatchedMovie(movie)
    this.router.navigate(['browse', movieId])
  }
}
