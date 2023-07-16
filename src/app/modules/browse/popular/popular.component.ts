import { Component,  OnInit, AfterViewChecked} from '@angular/core';
import { HttpService } from 'src/app/http.service';
import Glide, { Controls, Breakpoints } from '@glidejs/glide/dist/glide.modular.esm'



@Component({
  selector: 'app-popular',
  templateUrl: './popular.component.html',
  styleUrls: ['./popular.component.scss']
})

export class PopularComponent implements OnInit, AfterViewChecked {
  movies: any = []

  constructor(private httpService: HttpService) {}

  ngOnInit(): void {
    this.httpService.getMovies()
    .subscribe({
      next: res => this.movies = res,
      error: error => console.log('error'),
      complete: () => {
        this.movies = this.movies.results.splice(0, 5)
      }
    })
    
  }

  ngAfterViewChecked(): void {
   new Glide('.glide', {
      type: 'carousel',
      startAt: 0,
      perView: 4,
      peek: {
        before: 100,
        after: 100
      } 
    }).mount({ Controls, Breakpoints })
  }

} 
