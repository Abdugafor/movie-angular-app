import { Component, Input} from '@angular/core';
import { Store } from '@ngrx/store';
import { Movie } from 'src/app/models/interfaces/movies.interface';
import { HttpService } from 'src/app/services/http.service';
import { RouteService } from 'src/app/services/route.service';
import { AppState } from 'src/app/store';



@Component({
  selector: 'app-popular',
  templateUrl: './popular.component.html',
  styleUrls: ['./popular.component.scss']
})

export class PopularComponent{

  @Input() movies: any = []
  moreMovies: any = []
  isShowSpinner = false
  currentPage = 2

  constructor(
      private httpService: HttpService, 
      private routeService: RouteService,
      private store: Store<AppState>
    ) {}
  
  onLoadMore() {
    this.isShowSpinner = true

   this.httpService.getMovies(`${this.currentPage}`)
    .subscribe({
         next: (res: any) => this.moreMovies = res.results,
         error: error => console.log('error'),
         complete: () => {
           this.moreMovies.forEach(movie => {
            this.movies.push(movie)
            this.isShowSpinner = false
            this.currentPage++
           });
         }
    })
  }


  onNavigate(movie: Movie) {
    this.routeService.navigate(movie)
  }

} 
