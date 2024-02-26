import { Component, Input} from '@angular/core';
import {  Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { HttpService } from 'src/app/services/http.service';
import { AppState } from 'src/app/store';
import { BrowseActions } from 'src/app/store/action/browse.actions';



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
      private router: Router,
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


  onNavigate(movieId: number) {
    const movie = this.movies.filter(item => item.id === movieId)[0]
    
    this.store.dispatch(BrowseActions.addWatchedMovie({movie: movie}))
    this.router.navigate(['browse', movieId])
  }

} 
