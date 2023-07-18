import { Component , Input} from '@angular/core';

@Component({
  selector: 'app-movie-info-card',
  templateUrl: './movie-info-card.component.html',
  styleUrls: ['./movie-info-card.component.scss']
})
export class MovieInfoCardComponent {
  @Input() movie
}
