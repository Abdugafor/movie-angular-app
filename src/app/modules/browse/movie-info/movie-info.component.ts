import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import {  Subscription } from 'rxjs';
import { HttpService } from 'src/app/services/http.service';
import { RouteService } from 'src/app/services/route.service';
import { AppState } from 'src/app/store';
import { BrowseActions } from 'src/app/store/action/browse.actions';

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
      private routeService: RouteService,
      private store: Store<AppState>
    ) {
    this.subscribe = activatedRoute.params.subscribe(
      (params: any) => this.id = params['id']
    )
  }

  ngOnInit(): void {
    this.httpService.getData('https://api.themoviedb.org/3/movie/' + this.id)
    .subscribe(res => {
      this.movie = res
    })
  }

  ngOnDestroy(): void {
    this.subscribe.unsubscribe()
    this.routeService.setPreviousRoute('/browse/' + this.movie.id )
  }

  onClickFavoriteMovie() {
    this.isFavorite = !this.isFavorite

   if (this.isFavorite) {
    this.store.dispatch(BrowseActions.addFavoriteMovie({movie: this.movie}))
   }

   if(!this.isFavorite) {
    this.store.dispatch(BrowseActions.removeFavoriteMovie({movieId: this.movie.id}))
   }
  }
}
