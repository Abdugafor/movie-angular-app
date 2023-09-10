import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { AppService } from 'src/app/app.service';
import { HttpService } from 'src/app/http.service';

@Component({
  selector: 'app-movie-info',
  templateUrl: './movie-info.component.html',
  styleUrls: ['./movie-info.component.scss']
})
export class MovieInfoComponent implements OnDestroy, OnInit{
  id
  subscribe: Subscription;
  isFavorite = false
  
  movie: any = {
    runtime: 0,
    budget: 0,
    vote_average: 0,
    vote_count: 0,
    production_companies: []
  }

  constructor(
      private activatedRoute: ActivatedRoute, 
      private httpService: HttpService,
      private appService: AppService
    ) {
    this.subscribe = activatedRoute.params.subscribe(
      (params: any) => this.id = params['id']
    )
  }

  ngOnInit(): void {
    this.httpService.getData('https://api.themoviedb.org/3/movie/' + this.id)
    .subscribe(res => {
      this.movie = res
      console.log(res)
    })
  }

  ngOnDestroy(): void {
    this.subscribe.unsubscribe()
  }

  onClickFavoriteMovie() {
    this.isFavorite = !this.isFavorite

   if (this.isFavorite) {
    this.appService.addFavoriteMovie(this.movie)
   }
  }
}
