import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { HttpService } from 'src/app/http.service';

@Component({
  selector: 'app-movie-info',
  templateUrl: './movie-info.component.html',
  styleUrls: ['./movie-info.component.scss']
})
export class MovieInfoComponent implements OnDestroy, OnInit{
  id
  movie: any
  subscribe: Subscription;

  constructor(private activatedRoute: ActivatedRoute, private httpService: HttpService) {
    this.subscribe = activatedRoute.params.subscribe(
      (params: any) => this.id = params['id']
    )
  }

  ngOnInit(): void {
    this.httpService.getData('https://api.themoviedb.org/3/movie/' + this.id)
    .subscribe(res => this.movie = res)
  }

  ngOnDestroy(): void {
    this.subscribe.unsubscribe()
  }
}
