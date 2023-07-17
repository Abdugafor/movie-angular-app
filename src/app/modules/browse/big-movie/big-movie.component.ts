import { Component, Input } from '@angular/core';
import { HttpService } from 'src/app/http.service';

@Component({
  selector: 'app-big-movie',
  templateUrl: './big-movie.component.html',
  styleUrls: ['./big-movie.component.scss']
})
export class BigMovieComponent {

  @Input() movie: any = []
  moviePoster: any = ''

  constructor (private httpService: HttpService) {}


}
