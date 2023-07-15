import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/http.service';
import { Observable, of } from 'rxjs'

@Component({
  selector: 'app-browse',
  templateUrl: './browse.component.html',
  styleUrls: ['./browse.component.scss']
})
export class BrowseComponent implements OnInit {
  movies: any = []

  constructor(private httpService: HttpService) {}

  ngOnInit(): void {
    // this.httpService.getMovies()
    // .subscribe({
    //   next: res => this.movies = res,
    //   error: error => console.log(error),
    //   complete: () => {
    //     this.movies = this.movies.results
    //     console.log(this.movies)
    //   }
    // })
  }

}
