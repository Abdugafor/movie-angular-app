import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/http.service';

@Component({
  selector: 'app-comingsoon',
  templateUrl: './comingsoon.component.html',
  styleUrls: ['./comingsoon.component.scss']
})
export class ComingsoonComponent implements OnInit {
  movies
  isShowSpinner = false

  constructor (private httpService: HttpService) {}

  ngOnInit(): void {
    this.isShowSpinner = true

    this.httpService.getData('https://api.themoviedb.org/3/movie/upcoming')
    .subscribe({
      next: (res: any) => this.movies = res.results,
      error: err => console.log(err),
      complete: () => {
        console.log(this.movies)
        this.isShowSpinner = false
      }
    })
  }
}
