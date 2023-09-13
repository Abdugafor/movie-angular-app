import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-big-movie',
  templateUrl: './big-movie.component.html',
  styleUrls: ['./big-movie.component.scss']
})
export class BigMovieComponent {

  @Input() movie: any = []
  moviePoster: any = ''

  constructor (private httpService: HttpService, private router: Router) {}

  onNavigate(movieId: string) {
    this.router.navigate(['browse', movieId])
  }

}
