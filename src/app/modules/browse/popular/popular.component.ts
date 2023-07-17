import { Component,  OnInit} from '@angular/core';
import { HttpService } from 'src/app/http.service';



@Component({
  selector: 'app-popular',
  templateUrl: './popular.component.html',
  styleUrls: ['./popular.component.scss']
})

export class PopularComponent implements OnInit {
  movies: any = []
  parties: any = []
  test = "Transformers: Rise of the Beast 3 ff"
  constructor(private httpService: HttpService) {}

  ngOnInit(): void {
    this.httpService.getMovies()
    .subscribe({
      next: (res: any) => this.movies = res.results,
      error: error => console.log('error'),
      complete: () => {
        this.parties = this.movies.splice(0, 4)
        console.log(this.parties)
      }
    })
    
  }


} 
