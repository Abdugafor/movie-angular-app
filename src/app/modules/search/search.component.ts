import { Component , OnInit} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit{
  movieName
  movies
  subscribe

  isLoading = true
  isError = false
  isEmpty = false

  
  constructor (
    private activatedRoute: ActivatedRoute, 
    private HttpService: HttpService,
    private router: Router
    ) {
    this.subscribe = this.activatedRoute.params.subscribe(
      (params: any) => this.movieName = params['id']
    )
  }

  ngOnInit(): void {
   this.HttpService.searchMovie(this.movieName).subscribe({
    next: (res: any) => {
      if (res.results.length === 0) {
        this.isEmpty = true
      }

      this.movies  = res.results

    },
    error: err => {
      this.isError = true
      this.isLoading = false
      console.log(err)
    },
    complete: () => {
      this.isLoading = false
    }
   })
  }

  onNavigate(id: number) {
    this.router.navigate(['browse', id])
  }

}
