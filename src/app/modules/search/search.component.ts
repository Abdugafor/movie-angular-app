import { Component , OnInit} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpService } from 'src/app/http.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit{
  movieName
  movies
  subscribe

  constructor (private activatedRoute: ActivatedRoute, private HttpService: HttpService) {
    this.subscribe = this.activatedRoute.params.subscribe(
      (params: any) => this.movieName = params['id']
    )
  }

  ngOnInit(): void {
   this.HttpService.searchMovie(this.movieName).subscribe((res: any) => this.movies  = res.results)
  }

}
