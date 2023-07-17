import { Component, Input} from '@angular/core';
import {  Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { HttpService } from 'src/app/http.service';



@Component({
  selector: 'app-popular',
  templateUrl: './popular.component.html',
  styleUrls: ['./popular.component.scss']
})

export class PopularComponent{

  @Input() movies: any = []
  moreMovies: any = []


  constructor(private httpService: HttpService, private router: Router) {}
  
  onLoadMore() {
   this.httpService.getData('https://api.themoviedb.org/3/movie/top_rated')
    .subscribe({
         next: (res: any) => this.moreMovies = res.results,
         error: error => console.log('error'),
         complete: () => {
           this.moreMovies.forEach(movie => {
            this.movies.push(movie)
           });
         }
    })
  }


  onNavigate(movieId: number) {
    this.router.navigate(['browse', movieId])
  }

} 
