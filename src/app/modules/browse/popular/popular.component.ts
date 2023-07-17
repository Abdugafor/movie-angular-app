import { Component, Input} from '@angular/core';
import { HttpService } from 'src/app/http.service';



@Component({
  selector: 'app-popular',
  templateUrl: './popular.component.html',
  styleUrls: ['./popular.component.scss']
})

export class PopularComponent {
  @Input() movies: any = []
  moreMovies: any = []
  showSpinner = false

  constructor(private httpService: HttpService) {}

  
  onLoadMore() {
    this.showSpinner = true
    this.httpService.getData('https://api.themoviedb.org/3/movie/top_rated')
    .subscribe({
         next: (res: any) => this.moreMovies = res.results,
         error: error => console.log('error'),
         complete: () => {
           this.moreMovies.forEach(movie => {
            this.movies.push(movie)
            this.showSpinner = false
           });
         }
       })
  }

} 
